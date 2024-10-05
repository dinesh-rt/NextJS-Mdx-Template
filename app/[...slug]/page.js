import { getAllPostPaths, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getAllPostPaths();
  return paths.map(path => ({ slug: [path.params.slug] }));
}

export default async function Post({ params }) {
  const slug = params.slug.join('/');
  const postData = await getPostData(slug);
  
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