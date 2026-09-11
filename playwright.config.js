import { defineConfig, devices } from '@playwright/test';

/**
 * KATTRAL — Playwright E2E Test Configuration
 * Tests run against the local Vite dev server (port 5173)
 * or against the production URL when CI=true
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';

export default defineConfig({
  testDir: './tests/e2e',
  testMatch: '**/*.spec.js',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Reporter */
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
  ],

  use: {
    baseURL: BASE_URL,
    /* Collect trace when retrying the failed test. */
    trace: 'on-first-retry',
    /* Take screenshots on failure */
    screenshot: 'only-on-failure',
    /* Video on failure */
    video: 'on-first-retry',
    /* Global timeout */
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },

  projects: [
    /* Desktop Chrome */
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },

    /* Desktop Firefox */
    {
      name: 'Desktop Firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 720 },
      },
    },

    /* Tablet — iPad */
    {
      name: 'Tablet iPad',
      use: {
        ...devices['iPad (gen 7)'],
        viewport: { width: 768, height: 1024 },
      },
    },

    /* Mobile — iPhone 12 */
    {
      name: 'Mobile iPhone 12',
      use: {
        ...devices['iPhone 12'],
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },

    /* Mobile — Small (iPhone SE) */
    {
      name: 'Mobile Small iPhone SE',
      use: {
        ...devices['iPhone SE'],
        viewport: { width: 375, height: 667 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],

  /* Start the Vite dev server automatically before tests */
  webServer: {
    command: 'npm run dev',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
});
