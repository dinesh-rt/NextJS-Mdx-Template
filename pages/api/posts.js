import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export default function handler(req, res) {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      ...data
    }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))

  res.status(200).json(allPosts)
}