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
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Recently Updated</h2>
        <ul className="space-y-1">
          {recentPosts.slice(0, 5).map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-sm">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Trending Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 10).map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-xs rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}