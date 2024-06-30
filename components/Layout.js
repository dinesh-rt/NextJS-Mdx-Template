import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Your website description"
        />
      </Head>
      <header className="py-8">
        <h1 className="text-4xl font-bold">Your Website Name</h1>
        <nav className="mt-4">
          <Link href="/">
            <a className="mr-4">Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-8">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className="mt-8 py-4">
        <p>© 2023 Your Name</p>
      </footer>
    </div>
  )
}