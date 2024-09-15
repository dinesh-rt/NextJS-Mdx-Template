import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => ({
    slug: fileName.replace(/\.md$/, '')
  }))
}

async function getPostData(slug) {
  const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...data
  }
}

export default async function Post({ params }) {
  const postData = await getPostData(params.slug)

  return (
    <article className="prose lg:prose-xl dark:prose-invert mx-auto">
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}