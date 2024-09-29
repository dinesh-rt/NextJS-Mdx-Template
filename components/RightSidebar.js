'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getRecentPosts, getAllTags } from '../lib/posts'

export default function RightSidebar() {
  const [recentPosts, setRecentPosts] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getRecentPosts()
      setRecentPosts(posts)
      setTags(getAllTags())
    }
    fetchData()
  }, [])

  return (
    <aside className="w-64 p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-400">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recently Updated</h2>
        <ul className="space-y-2">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link 
                href={`/posts/${post.slug}`}
                className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Trending Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link 
              key={tag}
              href={`/tags/${tag}`}
              className="px-2 py-1 text-sm rounded bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}