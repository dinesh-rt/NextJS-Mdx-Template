'use client'

import { FaMoon, FaSun, FaGithub, FaTwitter, FaEnvelope, FaRss } from 'react-icons/fa'
import { useTheme } from './ThemeProvider'

export default function SidebarIcons() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {theme === 'dark' ? (
        <FaSun className="sidebar-icon" onClick={toggleTheme} />
      ) : (
        <FaMoon className="sidebar-icon" onClick={toggleTheme} />
      )}
      <FaGithub className="sidebar-icon" />
      <FaTwitter className="sidebar-icon" />
      <FaEnvelope className="sidebar-icon" />
      <FaRss className="sidebar-icon" />
    </div>
  )
}