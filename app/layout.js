import '../styles/globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Sidebar from '../components/Sidebar'
import RecentlyUpdated from '../components/RecentlyUpdated'
import TrendingTags from '../components/TrendingTags'

export const metadata = {
  title: 'Your Chirpy-like Website',
  description: 'A text-focused Next.js theme inspired by Chirpy',
}

// This would typically come from your data fetching logic
const recentPosts = [
  { slug: 'writing-a-new-post', title: 'Writing a New Post' },
  { slug: 'getting-started', title: 'Getting Started' },
  { slug: 'text-and-typography', title: 'Text and Typography' },
  { slug: 'customize-the-favicon', title: 'Customize the Favicon' },
]

const trendingTags = ['favicon', 'getting started', 'typography', 'writing']

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="flex bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Sidebar />
          <main className="flex-grow p-8">
            {children}
          </main>
          <aside className="w-64 p-4">
            <RecentlyUpdated posts={recentPosts} />
            <TrendingTags tags={trendingTags} />
          </aside>
        </body>
      </ThemeProvider>
    </html>
  )
}