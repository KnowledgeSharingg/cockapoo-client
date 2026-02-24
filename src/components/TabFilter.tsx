'use client';

import { CategoryFilter } from '../types';

interface TabFilterProps {
  activeFilter: CategoryFilter;
  onFilterChange: (filter: CategoryFilter) => void;
  counts: {
    all: number;
    domestic: number;
    global: number;
  };
}

export default function TabFilter({ activeFilter, onFilterChange, counts }: TabFilterProps) {
  const tabs = [
    { key: 'all' as CategoryFilter, label: '전체', count: counts.all },
    { key: 'domestic' as CategoryFilter, label: '국내', count: counts.domestic },
    { key: 'global' as CategoryFilter, label: '해외', count: counts.global },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-2 py-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onFilterChange(tab.key)}
              className={`tab-button whitespace-nowrap ${
                activeFilter === tab.key ? 'tab-active' : 'tab-inactive'
              }`}
            >
              {tab.label}
              <span className={`ml-2 ${
                activeFilter === tab.key 
                  ? 'text-blue-200' 
                  : 'text-gray-400'
              }`}>
                ({tab.count})
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}