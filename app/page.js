import Link from 'next/link'
import { FaCalendarAlt, FaFolder } from 'react-icons/fa'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug} className="block">
          <article className="bg-white dark:bg-gray-800 rounded-lg p-6 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <FaCalendarAlt className="mr-2" />
              <span className="mr-4">{post.date}</span>
              <FaFolder className="mr-2" />
              {post.categories && post.categories.map((category, catIndex) => (
                <span key={catIndex} className="mr-2">
                  {category}{catIndex < post.categories.length - 1 && ','}
                </span>
              ))}
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}