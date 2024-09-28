import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export async function getAboutData() {
  const filePath = path.join(process.cwd(), 'content', 'about.md')
  const fileContents = await fs.readFile(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { frontmatter: data, content }
}