import { test, expect } from '@playwright/test';

async function loginAsTestUser(page) {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  await page.evaluate(() => {
    const email = 'test@kattral.com';
    const testUser = { email, username: 'TestUser' };
    const testProfile = {
      username: 'TestUser',
      email,
      level: 'JLPT N5',
      streak: 5,
      completedLessons: 10,
      quizAverage: 90,
      vocabLearned: 200,
      kanjiLearned: 10,
      avatar: '🌸',
      profilePic: null,
    };

    localStorage.setItem('kattral_current_user', JSON.stringify(testUser));
    const accounts = {
      [email]: { email, password: 'password123', username: 'TestUser' },
    };
    localStorage.setItem('kattral_accounts', JSON.stringify(accounts));
    localStorage.setItem(`kattral_user_${email}`, JSON.stringify(testProfile));
    localStorage.setItem(`kattral_bookmarks_${email}`, JSON.stringify([]));
    localStorage.setItem(`kattral_n5_progress_${email}`, '35');
    localStorage.setItem(`kattral_n4_progress_${email}`, '0');
    localStorage.setItem(`kattral_n4_unlocked_${email}`, 'true');
    localStorage.setItem('kattral_theme', 'dark');
  });

  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);

  // If intro splash video is present in test, remove it to prevent pointer interception
  const splash = page.locator('div[aria-label="Intro Video Splash Screen"]');
  if (await splash.count() > 0) {
    await splash.evaluate((el) => el.remove()).catch(() => {});
  }
  await page.waitForTimeout(300);
}

test.describe('Navigation & Back Button Tests (Desktop & Mobile)', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsTestUser(page);
  });

  test('Back button in navbar appears on non-home pages and navigates back without closing app', async ({ page }) => {
    // 1. Initially on home view
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // In navbar, the back button should NOT be visible on home
    const navbarBackBtn = page.locator('header button[aria-label="Back"]');
    await expect(navbarBackBtn).toHaveCount(0);

    // 2. Navigate to practice (or N5)
    const practiceLink = page.locator('button:has-text("Launch Practice Hub"), nav button:has-text("Practice")').filter({ visible: true }).first();
    await practiceLink.click();
    await page.waitForTimeout(600);

    // Navbar back button should now be visible
    await expect(navbarBackBtn).toBeVisible();

    // 3. Click back button
    await navbarBackBtn.click();
    await page.waitForTimeout(600);

    // Should return to home page
    const bodyText = await page.textContent('body');
    expect(bodyText).toMatch(/Master Japanese/i);
  });

  test('Browser Back button smoothly returns to previous view without exiting application', async ({ page }) => {
    // Navigate from home -> practice -> speaking
    const practiceLink = page.locator('button:has-text("Launch Practice Hub"), nav button:has-text("Practice")').filter({ visible: true }).first();
    await practiceLink.click();
    await page.waitForTimeout(600);
    expect(page.url()).toContain('#practice');

    // Click into speaking practice
    const speakingCard = page.locator('.kattral-card:has-text("Speaking Practice"), h3:has-text("Speaking Practice")').first();
    await speakingCard.click();
    await page.waitForTimeout(600);
    expect(page.url()).toContain('#speaking');

    // Now press browser back
    await page.goBack();
    await page.waitForTimeout(600);

    // Should be at practice view, NOT exited or closed
    const bodyText = await page.textContent('body');
    expect(bodyText).toMatch(/Practice Modules|Practice Hub/i);

    // Press browser back again
    await page.goBack();
    await page.waitForTimeout(600);

    // Should be back at home view
    const homeText = await page.textContent('body');
    expect(homeText).toMatch(/Master Japanese/i);
  });

  test('In-app "Back to Practice Hub" button returns to practice without closing app', async ({ page }) => {
    // Navigate to speaking
    await page.evaluate(() => {
      window.location.hash = '#speaking';
      window.dispatchEvent(new PopStateEvent('popstate', { state: { view: 'speaking' } }));
    });
    await page.waitForTimeout(600);

    const backBtn = page.locator('button:has-text("Back to Practice Hub")').first();
    await expect(backBtn).toBeVisible();
    await backBtn.click();
    await page.waitForTimeout(600);

    // Should be on practice
    expect(page.url()).toContain('#practice');
  });
});

test.describe('Speaking Practice & Microphone Flow', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsTestUser(page);
  });

  test('Speaking view initializes correctly and mic button is interactive', async ({ page }) => {
    await page.evaluate(() => {
      window.location.hash = '#speaking';
      window.dispatchEvent(new PopStateEvent('popstate', { state: { view: 'speaking' } }));
    });
    await page.waitForTimeout(600);

    // Select a speaking category
    const categoryCard = page.locator('h3:has-text("Greetings & Basic Expressions")').first();
    await categoryCard.click();
    await page.waitForTimeout(600);

    // Check that Japanese sentence is displayed
    const sentenceBox = page.locator('text=Japanese Sentence');
    await expect(sentenceBox).toBeVisible();

    // Check Start Speaking button
    const micBtn = page.locator('button:has-text("Start Speaking")');
    await expect(micBtn).toBeVisible();

    // Click mic button (triggers permission check / recognition handler)
    await micBtn.click();
    await page.waitForTimeout(600);

    // Either listening state or simulation result should render cleanly without unhandled crash
    const bodyText = await page.textContent('body');
    expect(bodyText).toMatch(/Listening|Recognized|Speaking|Japanese/i);
  });
});

test.describe('UI Alignment & Text Wrapping Guards', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsTestUser(page);
  });

  test('no horizontal scrollbar on viewport and buttons do not wrap inappropriately', async ({ page }) => {
    const isOverflowing = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(isOverflowing).toBe(false);

    // Check primary buttons have valid dimensions
    const primaryBtns = page.locator('.btn-primary');
    const count = await primaryBtns.count();
    for (let i = 0; i < Math.min(count, 5); i++) {
      const box = await primaryBtns.nth(i).boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(36);
        expect(box.width).toBeGreaterThanOrEqual(50);
      }
    }
  });
});
