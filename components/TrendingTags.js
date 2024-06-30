import Link from 'next/link'

export default function TrendingTags({ tags }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Trending Tags</h2>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`} className="mr-2 mb-2 px-2 py-1 bg-gray-700 rounded-full text-sm hover:bg-gray-600">
            {tag}
          </Link>
        ))}
      </div>
    </div>
  )
}