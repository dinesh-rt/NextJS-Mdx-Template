'use client'

import { useState, useEffect } from 'react'
import { FaSun, FaMoon, FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function SidebarIcons({ email, github, linkedin, twitter }) {
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
        <FaSun 
          className="sidebar-icon text-gray-600 hover:text-yellow-500 cursor-pointer" 
          onClick={toggleTheme} 
          size={24}
        />
      ) : (
        <FaMoon 
          className="sidebar-icon text-gray-600 hover:text-blue-500 cursor-pointer" 
          onClick={toggleTheme} 
          size={24}
        />
      )}
      {email && (
        <a href={`mailto:${email}`} className="sidebar-icon text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
          <FaEnvelope size={24} />
        </a>
      )}
      {github && (
        <a href={`https://github.com/${github}`} className="sidebar-icon text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
          <FaGithub size={24} />
        </a>
      )}
      {linkedin && (
        <a href={`https://linkedin.com/in/${linkedin}`} className="sidebar-icon text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
          <FaLinkedin size={24} />
        </a>
      )}
      {twitter && (
        <a href={`https://twitter.com/${twitter}`} className="sidebar-icon text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
          <FaTwitter size={24} />
        </a>
      )}
    </div>
  )
} 