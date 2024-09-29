import { getAllTags, getPostsByTag } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(tag => ({ tag }));
}

export default async function TagPage({ params }) {
  const { tag } = params;
  const posts = await getPostsByTag(tag);

  return (
    <div>
      <h1>Posts tagged with &quot{tag}&quot</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}