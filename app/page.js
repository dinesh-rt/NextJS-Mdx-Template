import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home() {
  const allPostsData = getSortedPostsData()
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      {allPostsData.map(({ slug, date, title, excerpt }) => (
        <div key={slug} className="post-card">
          <Link href={`/posts/${slug}`}>
            <h3 className="post-title">{title}</h3>
          </Link>
          <p className="post-meta">{date}</p>
          <p className="post-excerpt">{excerpt}</p>
        </div>
      ))}
    </div>
  )
}