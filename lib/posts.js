import { server } from '../config'

export async function getAllPosts() {
  const res = await fetch(`${server}/api/posts`)
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  const posts = await res.json()
  return posts.map(post => ({
    ...post,
    content: post.content || '' // Ensure content is always a string
  }))
}


export async function getPostsByTag(tag) {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.tags && post.tags.includes(tag))
}

export async function getAllTags() {
  const allPosts = await getAllPosts()
  const tagCounts = {}
  allPosts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    }
  })
  return Object.entries(tagCounts).sort((a, b) => b[1] - a[1])
}

export async function getRecentPosts() {
  try {
    const allPosts = await getAllPosts()
    return allPosts.slice(0, 5)
  } catch (error) {
    console.error('Error fetching recent posts:', error)
    return []
  }
}

export async function getArchivedPosts() {
  const allPosts = await getAllPosts()
  const archives = {}
  
  allPosts.forEach(post => {
    const date = new Date(post.date)
    const year = date.getFullYear()
    if (!archives[year]) {
      archives[year] = []
    }
    archives[year].push({
      ...post,
      date: date.toISOString() // Ensure consistent date format
    })
  })

  // Sort posts within each year
  Object.keys(archives).forEach(year => {
    archives[year].sort((a, b) => new Date(b.date) - new Date(a.date))
  })

  return archives
}