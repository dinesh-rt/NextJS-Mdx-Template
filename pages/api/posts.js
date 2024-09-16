import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export default function handler(req, res) {
  if (req.method === 'GET') {
    const postsData = getAllPosts()
    res.status(200).json(postsData)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      ...data,
      content
    }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
}