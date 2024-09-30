'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaSearch, FaChevronRight } from 'react-icons/fa'

const Breadcrumb = () => {
  const pathname = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState([])

  useEffect(() => {
    const linkPath = pathname.split('/')
    linkPath.shift()

    const pathArray = linkPath.map((path, i) => {
      return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') }
    })

    setBreadcrumbs(pathArray)
  }, [pathname])

  if (!breadcrumbs.length) {
    return <span className="text-blue-400">Home</span>
  }

  return (
    <nav aria-label="breadcrumbs">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-400 hover:text-white">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => (
          <li key={breadcrumb.href} className="flex items-center">
            <FaChevronRight className="text-gray-600 mx-2" />
            {i === breadcrumbs.length - 1 ? (
              <span className="text-blue-400">{breadcrumb.breadcrumb}</span>
            ) : (
              <Link href={breadcrumb.href} className="text-gray-400 hover:text-white">
                {breadcrumb.breadcrumb}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

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
    <header className="bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-screen-xl mx-auto flex items-center">
        <div className="w-2/3 pr-8">
          <Breadcrumb />
        </div>
        <div className="w-1/3 pl-8 flex justify-start">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-1 w-40 rounded-l bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none text-sm"
            />
            <button type="submit" className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white p-1 rounded-r">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}