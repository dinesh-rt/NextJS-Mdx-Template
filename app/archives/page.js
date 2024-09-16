import Link from 'next/link'
import { getArchivedPosts } from '../../lib/posts'

export default async function ArchivesPage() {
  const archives = await getArchivedPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Archives</h1>
      {Object.entries(archives).reverse().map(([year, posts]) => (
        <div key={year} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{year}</h2>
          <ul className="space-y-2 relative before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gray-300 dark:before:bg-gray-700">
            {posts.map(post => (
              <li key={post.slug} className="pl-6 relative">
                <span className="absolute left-0 top-3 w-3 h-3 bg-blue-500 rounded-full"></span>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </time>
                <Link href={`/posts/${post.slug}`} className="ml-2 text-blue-600 dark:text-blue-400 hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}