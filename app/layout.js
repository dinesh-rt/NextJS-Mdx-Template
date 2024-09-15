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
        <body className="flex bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Sidebar />
          <div className="flex-grow flex flex-col">
            <Header />
            <main className="flex-grow p-8">
              {children}
            </main>
          </div>
          <RightSidebar />
        </body>
      </ThemeProvider>
    </html>
  )
}