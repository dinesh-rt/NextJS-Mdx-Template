import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { FaCalendarAlt, FaFolder } from 'react-icons/fa'
import { unstable_noStore as noStore } from 'next/cache'

function getPostsData() {
  noStore(); // Disable static rendering
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  const postsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const excerpt = content.slice(0, 200) + '...'

    return {
      slug,
      ...data,
      excerpt
    }
  })

  return postsData.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export default function Home() {
  let posts = getPostsData();

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug} className="block">
          <article className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <FaCalendarAlt className="mr-2" />
              <span className="mr-4">{post.date}</span>
              <FaFolder className="mr-2" />
              {post.categories.map((category, catIndex) => (
                <span key={catIndex} className="mr-2">{category}{catIndex < post.categories.length - 1 && ','}</span>
              ))}
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}