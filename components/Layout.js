import Sidebar from './Sidebar'
import RightSidebar from './RightSidebar'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col lg:flex-row">
          <main className="flex-1 p-4 lg:p-6">
            {children}
          </main>
          <div className="lg:w-64 lg:flex-shrink-0">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}