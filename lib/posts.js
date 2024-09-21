import postsData from '../cache/posts-data.json';

export function getAllTags() {
  const tagSet = new Set();
  postsData.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tagSet.add(tag));
    }
  });
  return Array.from(tagSet);
}

export async function getRecentPosts() {
  // If this is actually synchronous, remove the async keyword
  return postsData.slice(0, 5); // Return the 5 most recent posts
}

export function getAllPosts() {
  return postsData;
}

export function getPostsByTag(tag) {
  return postsData.filter(post => post.tags && post.tags.includes(tag));
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