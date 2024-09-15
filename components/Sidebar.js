'use client'

import Link from 'next/link'
import { FaMoon, FaSun, FaGithub, FaTwitter, FaEnvelope, FaRss, FaHome, FaList, FaTags, FaArchive, FaInfo } from 'react-icons/fa'
import { useTheme } from './ThemeProvider'

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <aside className="w-64 min-h-screen p-4 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="mb-8 text-center">
        <img src="/avatar.png" alt="Avatar" className="w-24 h-24 mx-auto mb-2 rounded-full" />
        <h1 className="text-2xl font-bold">Chirpy</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">A text-focused Jekyll theme</p>
      </div>
      <nav className="mb-8">
        <ul>
          <li><Link href="/" className="flex items-center py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"><FaHome className="mr-2" /> HOME</Link></li>
          <li><Link href="/categories" className="flex items-center py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"><FaList className="mr-2" /> CATEGORIES</Link></li>
          <li><Link href="/tags" className="flex items-center py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"><FaTags className="mr-2" /> TAGS</Link></li>
          <li><Link href="/archives" className="flex items-center py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"><FaArchive className="mr-2" /> ARCHIVES</Link></li>
          <li><Link href="/about" className="flex items-center py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"><FaInfo className="mr-2" /> ABOUT</Link></li>
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