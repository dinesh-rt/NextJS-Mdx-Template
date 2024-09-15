import Link from 'next/link'

export default function RightSidebar() {
  const recentPosts = [
    'Getting Started',
    'Text and Typography',
    'Writing a New Post',
    'Customize the Favicon',
  ]

  const trendingTags = ['favicon', 'getting started', 'typography', 'writing']

  return (
    <aside className="w-64 p-4 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Recently Updated</h2>
        <ul>
          {recentPosts.map((post, index) => (
            <li key={index} className="mb-2">
              <Link href={`/posts/${post.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                {post}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Trending Tags</h2>
        <div className="flex flex-wrap">
          {trendingTags.map((tag, index) => (
            <Link key={index} href={`/tags/${tag}`} className="mr-2 mb-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600">
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}