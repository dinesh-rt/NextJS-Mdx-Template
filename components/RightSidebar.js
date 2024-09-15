'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getRecentPosts, getAllTags } from '../lib/posts'

export default function RightSidebar() {
  const [recentPosts, setRecentPosts] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    getRecentPosts().then(setRecentPosts)
    getAllTags().then(setTags)
  }, [])

  return (
    <aside className="w-64 p-4 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Recently Updated</h2>
        {recentPosts.length > 0 ? (
          <ul>
            {recentPosts.map((post) => (
              <li key={post.slug} className="mb-2">
                <Link 
                  href={`/posts/${post.slug}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading recent posts...</p>
        )}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Trending Tags</h2>
        <div className="flex flex-wrap">
          {tags.map(([tag, count]) => (
            <Link 
              key={tag}
              href={`/tags/${tag}`}
              className="mr-2 mb-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {tag} ({count})
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}