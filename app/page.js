import Link from 'next/link'
import { FaCalendarAlt, FaFolder } from 'react-icons/fa'

const posts = [
  {
    title: 'Getting Started',
    excerpt: 'Get started with Chirpy basics in this comprehensive overview. You will learn how to install, configure, and use your first Chirpy-based website, as well as deploy it to a web server.',
    date: 'Aug 9, 2019',
    categories: ['Blogging', 'Tutorial'],
    slug: 'getting-started'
  },
  {
    title: 'Text and Typography',
    excerpt: 'Examples of text, typography, math equations, diagrams, flowcharts, pictures, videos, and more.',
    date: 'Aug 7, 2019',
    categories: ['Blogging', 'Demo'],
    slug: 'text-and-typography'
  },
  {
    title: 'Customize the Favicon',
    excerpt: 'The favicons of Chirpy are placed in the directory assets/img/favicons/. You may want to replace them with your own. The following sections will guide you to create and replace the default...',
    date: 'Aug 10, 2019',
    categories: ['Blogging', 'Tutorial'],
    slug: 'customize-the-favicon'
  },
  // Add more posts as needed
]

export default function Home() {
  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <Link href={`/posts/${post.slug}`} key={index} className="block">
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
