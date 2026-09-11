import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Pagination = ({ currentPage, totalPages, onPageChange, className = '' }) => {
  if (!totalPages || totalPages <= 1) return null;

  const getPageNumbers = () => {
    const maxVisible = 5;
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={`flex items-center justify-center gap-2 sm:gap-2.5 py-3 select-none ${className}`}>
      {/* Previous Arrow Button */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all border border-slate-200/80 dark:border-slate-700/60 bg-slate-100/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 ${
          currentPage === 1
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95'
        }`}
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={isActive ? 'page' : undefined}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center font-extrabold text-sm sm:text-base transition-all ${
              isActive
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                : 'bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/40 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95'
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Arrow Button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all border border-slate-200/80 dark:border-slate-700/60 bg-slate-100/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 ${
          currentPage === totalPages
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95'
        }`}
      >
        <ChevronRight className="w-5 h-5 stroke-[2.2]" />
      </button>
    </div>
  );
};
