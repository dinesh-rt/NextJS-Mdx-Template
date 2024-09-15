'use client'

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchTerm)
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Search</h2>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="flex-grow p-2 border rounded-l dark:bg-gray-800 dark:border-gray-700"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
          <FaSearch />
        </button>
      </form>
    </div>
  )
}