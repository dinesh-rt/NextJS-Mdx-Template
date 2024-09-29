import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

export default async function WikiPage({ params }) {
  const slug = params.slug.join('/');
  try {
    const postData = await getPostData(slug);
    return (
      <article>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    );
  } catch (error) {
    notFound();
  }
}