import Link from 'next/link'

export default function RecentlyUpdated({ posts }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Recently Updated</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/posts/${post.slug}`} className="hover:text-white">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}