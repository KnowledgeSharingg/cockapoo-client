'use client';

import { useState, useMemo } from 'react';
import { CategoryFilter } from '../types';
import { blogs } from '../data/blogs';
import Header from '../components/Header';
import TabFilter from '../components/TabFilter';
import BlogGrid from '../components/BlogGrid';
import Footer from '../components/Footer';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  // Calculate counts for each category
  const counts = useMemo(() => {
    const domestic = blogs.filter(blog => blog.category === 'domestic').length;
    const global = blogs.filter(blog => blog.category === 'global').length;
    
    return {
      all: blogs.length,
      domestic,
      global,
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Tab Filter */}
      <TabFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        counts={counts}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Info */}
        <div className="mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{counts.all}</div>
                <div className="text-sm text-gray-600">전체 블로그</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{counts.domestic}</div>
                <div className="text-sm text-gray-600">국내 기업</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{counts.global}</div>
                <div className="text-sm text-gray-600">해외 기업</div>
              </div>
            </div>
            {searchTerm && (
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">&quot;{searchTerm}&quot;</span> 검색 결과
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        <BlogGrid
          blogs={blogs}
          searchTerm={searchTerm}
          activeFilter={activeFilter}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}