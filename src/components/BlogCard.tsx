'use client';

import { Blog } from '../types';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const handleClick = () => {
    window.open(blog.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg border border-gray-200 shadow-sm card-hover cursor-pointer p-6"
    >
      {/* Category Badge */}
      <div className="flex justify-between items-start mb-3">
        <span
          className={`category-badge ${
            blog.category === 'domestic' 
              ? 'category-domestic' 
              : 'category-global'
          }`}
        >
          {blog.category === 'domestic' ? '국내' : '해외'}
        </span>
        
        {/* External Link Icon */}
        <svg
          className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      {/* Company Name */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {blog.name}
      </h3>

      {/* URL */}
      <p className="text-sm text-gray-500 truncate">
        {blog.url.replace(/^https?:\/\//, '')}
      </p>

      {/* Hover Effect Indicator */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-400">
          기술 블로그
        </span>
        <div className="flex items-center text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>방문하기</span>
          <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}