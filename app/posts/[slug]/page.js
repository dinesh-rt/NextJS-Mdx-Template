import { getPostData, getAllPostPaths } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllPostPaths();
}

export default async function Post({ params }) {
  const postData = await getPostData(params.slug);
  
  if (!postData) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </article>
  );
}