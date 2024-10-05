import Link from 'next/link';
import { getPostsByTag, getTagBySlug, getTagPostCounts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export default async function TagPage({ params }) {
  const { tag } = params;
  console.log('Rendering tag page for:', tag);

  const tagData = getTagBySlug(tag);
  if (!tagData) {
    notFound();
  }

  const tagPosts = await getPostsByTag(tag);

  const tagCounts = getTagPostCounts();
  const postCount = tagCounts[tag] || 0;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Posts tagged with &quot;{tagData.name}&quot; ({postCount})</h1>
      {postCount === 0 ? (
        <p>No posts found with this tag.</p>
      ) : (
        <ul className="space-y-4">
          {tagPosts.map(post => (
            <li key={post.slug} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <Link href={`/posts/${post.slug}`} className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{post.date}</p>
              <div className="mt-4 prose dark:prose-invert">
                <p>{post.excerpt || (post.content && typeof post.content === 'string' ? post.content.slice(0, 150) : 'No excerpt available')}...</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}