import { FaSearch } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Home</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-8 pr-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </header>
  )
}