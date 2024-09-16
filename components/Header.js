'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
      <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
        Home
      </Link>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-8 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
        />
        <button type="submit" className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <FaSearch className="text-gray-400" />
        </button>
      </form>
    </header>
  )
}