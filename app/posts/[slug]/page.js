import { getPostData, getAllPostSlugs } from '../../../lib/posts'

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths.map((path) => ({
    slug: path.params.slug,
  }))
}

export default async function Post({ params }) {
  const postData = await getPostData(params.slug)
  return (
    <article className="prose lg:prose-xl">
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}