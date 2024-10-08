'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaHome, FaTags, FaArchive, FaInfo } from 'react-icons/fa'
import { getAllTags } from '../lib/posts'
import Image from 'next/image'
import SidebarIcons from './SidebarIcons'

export default function SidebarContent(frontmatter) {
  const [tags, setTags] = useState([])
  const [isTagsOpen, setIsTagsOpen] = useState(false)
  const { name, title, image, email, github, linkedin, twitter } = frontmatter.frontmatter || frontmatter;

  useEffect(() => {
    setTags(getAllTags())
  }, [])

  return (
    <aside className="w-64 min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-400">
      <div className="mb-8 text-center">
        <Image 
          src="/images/avatar.jpeg"
          alt="Avatar"
          width={96}
          height={96}
          className="mx-auto mb-2 rounded-full"
        />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Chirpy</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">A text-focused Jekyll theme</p>
      </div>
      <nav className="mb-8">
        <ul className="space-y-2">
          <li><Link href="/" className="flex items-center py-2 hover:text-blue-700 dark:hover:text-blue-500"><FaHome className="mr-2" /> HOME</Link></li>
          <li><Link href="/tags" className="flex items-center py-2 hover:text-blue-700 dark:hover:text-blue-500"><FaTags className="mr-2" /> TAGS</Link></li>
          <li><Link href="/archives" className="flex items-center py-2 hover:text-blue-700 dark:hover:text-blue-500"><FaArchive className="mr-2" /> ARCHIVES</Link></li>
          <li><Link href="/about" className="flex items-center py-2 hover:text-blue-700 dark:hover:text-blue-500"><FaInfo className="mr-2" /> ABOUT</Link></li>
        </ul>
      </nav>
      <SidebarIcons 
        email={email}
        github={github}
        linkedin={linkedin}
        twitter={twitter}
      />
    </aside>
  )
}