'use client';

import { useMemo } from 'react';
import { Blog, CategoryFilter } from '../types';
import BlogCard from './BlogCard';

interface BlogGridProps {
  blogs: Blog[];
  searchTerm: string;
  activeFilter: CategoryFilter;
}

export default function BlogGrid({ blogs, searchTerm, activeFilter }: BlogGridProps) {
  // Filter blogs based on search term and category
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(blog => blog.category === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [blogs, searchTerm, activeFilter]);

  if (filteredBlogs.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          검색 결과가 없습니다
        </h3>
        <p className="text-gray-500">
          {searchTerm
            ? `&quot;${searchTerm}&quot;에 대한 검색 결과가 없습니다.`
            : '해당 카테고리에 블로그가 없습니다.'
          }
        </p>
        {searchTerm && (
          <p className="text-sm text-gray-400 mt-2">
            다른 검색어를 시도해보세요.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}