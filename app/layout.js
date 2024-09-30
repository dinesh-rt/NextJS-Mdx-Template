import '../styles/globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import RightSidebar from '../components/RightSidebar'

export const metadata = {
  title: 'Your Chirpy-like Website',
  description: 'A text-focused Next.js theme inspired by Chirpy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="flex bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
          <Sidebar />
          <div className="flex-grow flex flex-col min-h-screen">
            <Header />
            <div className="flex justify-center flex-grow">
              <div className="w-full max-w-screen-xl flex">
                <main className="w-2/3 p-8 overflow-y-auto">
                  {children}
                </main>
                <aside className="w-1/3 p-8 overflow-y-auto">
                  <RightSidebar />
                </aside>
              </div>
            </div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}