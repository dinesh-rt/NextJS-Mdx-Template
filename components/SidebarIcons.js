'use client'

import { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaGithub, FaTwitter, FaEnvelope, FaRss } from 'react-icons/fa'

export default function SidebarIcons() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
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
  )
}