'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaSearch, FaChevronRight, FaBars } from 'react-icons/fa'

const Breadcrumb = () => {
  const pathname = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState([])

  useEffect(() => {
    const linkPath = pathname.split('/')
    linkPath.shift()

    const pathArray = linkPath.map((path, i) => {
      return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') }
    })

    const filteredPathArray = pathArray.filter(path => path.breadcrumb !== 'posts')

    setBreadcrumbs(filteredPathArray)
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="bg-gray-100 dark:bg-gray-900 p-4 lg:flex lg:justify-between lg:items-center">
      <div className="hidden lg:block flex-grow">
        <Breadcrumb />
      </div>
      <div className="w-full lg:w-64">
        <form onSubmit={handleSearch} className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 w-full rounded-l bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none text-sm"
          />
          <button type="submit" className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white p-2 rounded-r">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  )
}