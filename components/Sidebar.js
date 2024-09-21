'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaHome, FaList, FaTags, FaArchive, FaInfo, FaChevronDown, FaChevronUp, FaMoon, FaGithub, FaTwitter, FaEnvelope, FaRss, FaSun } from 'react-icons/fa'
import { getAllTags } from '../lib/posts'
import { useTheme } from './ThemeProvider'
import Image from 'next/image'

export default function Sidebar() {
  const [tags, setTags] = useState([])
  const [isTagsOpen, setIsTagsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTags(getAllTags())
  }, [])

  return (
    <aside className="w-64 min-h-screen p-6 bg-gray-900 text-gray-400">
      <div className="mb-8 text-center">
      <Image 
          src="/images/avatar.jpeg"  // Update this path to your new avatar image
          alt="Avatar"
          width={96}  // Adjust based on your desired size
          height={96} // Adjust based on your desired size
          className="mx-auto mb-2 rounded-full"
        />
        <h1 className="text-2xl font-bold">Chirpy</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">A text-focused Jekyll theme</p>
      </div>
      <nav className="mb-8">
        <ul className="space-y-2">
          <li><Link href="/" className="flex items-center py-2 hover:text-blue-500"><FaHome className="mr-2" /> HOME</Link></li>
          <li><Link href="/categories" className="flex items-center py-2 hover:text-blue-500"><FaList className="mr-2" /> CATEGORIES</Link></li>
          <li>
            <button 
              onClick={() => setIsTagsOpen(!isTagsOpen)} 
              className="flex items-center justify-between w-full py-1.5 hover:text-white"
            >
              <span className="flex items-center"><FaTags className="mr-3" /> TAGS</span>
              {isTagsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isTagsOpen && (
              <ul className="mt-2 ml-6 space-y-1">
                {tags.map((tag) => (
                  <li key={tag}>
                    <Link href={`/tags/${tag}`} className="flex items-center py-1 hover:text-white">
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><Link href="/archives" className="flex items-center py-2 hover:text-blue-500"><FaArchive className="mr-2" /> ARCHIVES</Link></li>
          <li><Link href="/about" className="flex items-center py-2 hover:text-blue-500"><FaInfo className="mr-2" /> ABOUT</Link></li>
        </ul>
      </nav>
      <div className="flex justify-center space-x-4 mt-8">
        {theme === 'dark' ? (
          <FaSun className="sidebar-icon text-gray-600 hover:text-yellow-500" onClick={toggleTheme} />
        ) : (
          <FaMoon className="sidebar-icon text-gray-600 hover:text-blue-500" onClick={toggleTheme} />
        )}
        <FaGithub className="sidebar-icon text-gray-600 hover:text-gray-800 dark:hover:text-white" />
        <FaTwitter className="sidebar-icon text-gray-600 hover:text-blue-400" />
        <FaEnvelope className="sidebar-icon text-gray-600 hover:text-red-500" />
        <FaRss className="sidebar-icon text-gray-600 hover:text-orange-500" />
      </div>
    </aside>
  )
}