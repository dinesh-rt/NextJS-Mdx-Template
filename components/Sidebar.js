import Link from 'next/link'
import SidebarIcons from './SidebarIcons'

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen p-4 border-r border-gray-700">
      <div className="mb-8 text-center">
        <img src="/avatar.png" alt="Avatar" className="w-24 h-24 mx-auto mb-2 rounded-full" />
        <h1 className="text-2xl font-bold">Chirpy</h1>
        <p className="text-sm text-gray-400">A text-focused Jekyll theme</p>
      </div>
      <nav>
        <ul>
          <li><Link href="/" className="block py-2 hover:text-white">HOME</Link></li>
          <li><Link href="/categories" className="block py-2 hover:text-white">CATEGORIES</Link></li>
          <li><Link href="/tags" className="block py-2 hover:text-white">TAGS</Link></li>
          <li><Link href="/archives" className="block py-2 hover:text-white">ARCHIVES</Link></li>
          <li><Link href="/about" className="block py-2 hover:text-white">ABOUT</Link></li>
        </ul>
      </nav>
      <SidebarIcons />
    </aside>
  )
}