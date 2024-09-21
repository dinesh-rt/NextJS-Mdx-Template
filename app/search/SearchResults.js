'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function SearchResultsContent() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const data = await res.json()
        setResults(data)
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
      setIsLoading(false)
    }

    if (query) {
      fetchSearchResults()
    }
  }, [query])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Results for &quot;{query}&quot;</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((post) => (
            <li key={post.slug} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <Link href={`/posts/${post.slug}`} className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{post.date}</p>
              {post.tags && (
                <div className="mt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default function SearchResults() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResultsContent />
    </Suspense>
  )
}