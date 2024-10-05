import Link from 'next/link';
import { notFound } from 'next/navigation'
import { getAllTags, getPostsByTag, getTagBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({ tag: tag.slug }))
}

export default function TagPage({ params }) {
  const { tag } = params
  const tagData = getTagBySlug(tag)
  const tagPosts = getPostsByTag(tag)

  if (!tagData || tagPosts.length === 0) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Posts tagged with &quot;{tagData.name}&quot; ({tagPosts.length})</h1>
      <ul className="space-y-4">
        {tagPosts.map(post => (
          <li key={post.slug} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <Link href={`/posts/${post.slug}`} className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{post.date}</p>
            <div className="mt-4 prose dark:prose-invert">
              {/* We'll just show an excerpt here instead of full MDX content */}
              <p>{post.excerpt || post.content.slice(0, 150)}...</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}