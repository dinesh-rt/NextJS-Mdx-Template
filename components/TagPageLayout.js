import Link from 'next/link'
import Image from 'next/image'
import { FaHome, FaList, FaTags, FaArchive, FaInfo, FaChevronDown, FaSun, FaGithub, FaTwitter, FaEnvelope, FaRss } from 'react-icons/fa'

export default function TagPageLayout({ children, recentPosts, allTags }) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-300">
      {/* Left Sidebar */}
      <aside className="w-64 p-6 bg-gray-900 border-r border-gray-800">
        <div className="mb-8 text-center">
          <Image src="/images/avatar.jpeg" alt="Chirpy" width={100} height={100} className="rounded-full mb-4 mx-auto" />
          <h1 className="text-2xl font-bold text-white">Chirpy</h1>
          <p className="text-sm">A text-focused Jekyll theme</p>
        </div>
        <nav>
          <ul className="space-y-2">
            <li><Link href="/" className="flex items-center hover:text-white"><FaHome className="mr-2" /> HOME</Link></li>
            <li><Link href="/categories" className="flex items-center hover:text-white"><FaList className="mr-2" /> CATEGORIES</Link></li>
            <li>
              <button className="flex items-center justify-between w-full hover:text-white">
                <span className="flex items-center"><FaTags className="mr-2" /> TAGS</span>
                <FaChevronDown />
              </button>
            </li>
            <li><Link href="/archives" className="flex items-center hover:text-white"><FaArchive className="mr-2" /> ARCHIVES</Link></li>
            <li><Link href="/about" className="flex items-center hover:text-white"><FaInfo className="mr-2" /> ABOUT</Link></li>
          </ul>
        </nav>
        <div className="flex justify-center space-x-2 mt-8">
          <FaSun className="text-gray-600 hover:text-white cursor-pointer" />
          <FaGithub className="text-gray-600 hover:text-white cursor-pointer" />
          <FaTwitter className="text-gray-600 hover:text-white cursor-pointer" />
          <FaEnvelope className="text-gray-600 hover:text-white cursor-pointer" />
          <FaRss className="text-gray-600 hover:text-white cursor-pointer" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex">
        <main className="flex-grow p-6">
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Home</h2>
            <input type="text" placeholder="Search..." className="px-4 py-2 bg-gray-800 rounded-full" />
          </header>
          {children}
        </main>

        {/* Right Sidebar */}
        <aside className="w-64 p-6 bg-gray-900 border-l border-gray-800">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Recently Updated</h3>
            <ul className="space-y-2">
              {recentPosts.map(post => (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`} className="hover:text-white">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Link key={tag} href={`/tags/${tag}`} className="px-2 py-1 bg-gray-800 text-sm rounded hover:bg-gray-700">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}