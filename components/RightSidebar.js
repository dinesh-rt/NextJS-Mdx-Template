'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getRecentPosts, getAllTags } from '../lib/posts'

export default function RightSidebar() {
  const [recentPosts, setRecentPosts] = useState([])
  const [tags, setTags] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
      const posts = await getRecentPosts()
      setRecentPosts(posts)

      const fetchedTags = getAllTags()
      setTags(fetchedTags)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching data')
      }
    }
    fetchData() 
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Recently Updated</h2>
        <ul className="space-y-1">
          {Array.isArray(recentPosts) && recentPosts.length > 0 ? (
            recentPosts.slice(0, 4).map((post) => (
              <li key={post.slug}>
                <Link 
                   href={`/posts/${post.slug}`} 
                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors duration-200"
                >
                   {post.title || post.name || 'Untitled Post'}
                </Link>
              </li>
            ))
          ) : (
            <li>No recent posts available</li>
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Trending Tags</h2>
        <div className="flex flex-wrap gap-2">
          {Array.isArray(tags) && tags.length > 0 ? (
            tags.slice(0, 4).map((tag, index) => (
              <Link
                key={index}
                href={`/tags/${encodeURIComponent(typeof tag === 'string' ? tag : tag.slug || tag.name || '')}`}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-xs rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
               >
                {typeof tag === 'string' ? tag : tag.name || 'Unnamed Tag'}
              </Link>
            ))
          ) : (
            <div>No tags available</div>
          )}
        </div>
      </div>
    </div>
  )
}