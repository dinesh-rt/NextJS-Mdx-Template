import Link from 'next/link'
import { getPostsByTag, getAllTags } from '../../../lib/posts'

export default function TagPage({ params }) {
  const { tag } = params
  const posts = getPostsByTag(tag)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Posts tagged with &quot;{tag}&quot; ({posts.length})</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <Link href={`/posts/${post.slug}`} className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function generateStaticParams() {
  const tags = getAllTags()
  return tags.map(tag => ({ tag }))
}