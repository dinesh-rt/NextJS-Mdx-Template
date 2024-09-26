import Sidebar from './Sidebar'
import RightSidebar from './RightSidebar'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <RightSidebar />
    </div>
  )
}