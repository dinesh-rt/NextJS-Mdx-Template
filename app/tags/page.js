import Link from 'next/link'
import { getAllTags, getTagPostCounts } from '@/lib/posts'

export default async function TagsPage() {
  const tags = getAllTags()
  const tagCounts = getTagPostCounts()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Tags</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tags/${tag.slug}`}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-blue-600 dark:text-blue-400 text-lg font-medium hover:underline">
              {tag.name}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              {tagCounts[tag.slug]} post{tagCounts[tag.slug] !== 1 ? 's' : ''}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}