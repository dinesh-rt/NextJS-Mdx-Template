import Link from 'next/link'
import { getArchivedPosts } from '../../lib/posts'

export default function ArchivesPage() {
  const archives = getArchivedPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Archives</h1>
      {Object.entries(archives).reverse().map(([year, posts]) => (
        <div key={year} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{year}</h2>
          <ul className="space-y-2">
            {posts.map(post => (
              <li key={post.slug} className="flex items-center">
                <span className="text-gray-500 mr-4">{new Date(post.date).toLocaleDateString()}</span>
                <Link href={`/posts/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
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