import Link from 'next/link'
import { getAllTags, getTagPostCounts } from '@/lib/posts'

export default async function TagsPage() {
  const tags = getAllTags()
  const tagCounts = getTagPostCounts()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-200">Tags</h1>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tags/${tag.slug}`}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            {tag.name}
            <span className="ml-1 text-gray-500 dark:text-gray-400">
              {tagCounts[tag.slug]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
} 