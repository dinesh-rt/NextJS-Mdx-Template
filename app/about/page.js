import Image from 'next/image'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

async function getAboutData() {
  const filePath = path.join(process.cwd(), 'content', 'about.md')
  const fileContents = await fs.readFile(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    frontmatter: data,
    content: contentHtml,
  }
}

export default async function AboutPage() {
  const { frontmatter, content } = await getAboutData()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">About</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center">
          <Image
            src={frontmatter.image}
            alt={frontmatter.name}
            width={200}
            height={200}
            className="rounded-full bg-emerald-300"
          />
          <h2 className="text-2xl font-semibold mt-4 text-white">{frontmatter.name}</h2>
          <p className="text-gray-400 text-center">{frontmatter.title}<br />{frontmatter.institution}</p>
          <div className="flex space-x-4 mt-4">
            <a href={`mailto:${frontmatter.email}`} className="text-gray-400 hover:text-white">
              <FaEnvelope size={24} />
            </a>
            <a href={`https://github.com/${frontmatter.github}`} className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href={`https://linkedin.com/in/${frontmatter.linkedin}`} className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href={`https://twitter.com/${frontmatter.twitter}`} className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex-1 space-y-6">
          <div 
            className="text-gray-300 prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  )
}