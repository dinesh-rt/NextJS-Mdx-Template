import postsData from '../cache/posts-data.json';
import { processMarkdown } from './markdown';

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
  const recentPosts = postsData.slice(0, 5);
  return Promise.all(recentPosts.map(async (post) => ({
    ...post,
    content: await processMarkdown(post.content)
  })));
}

export async function getAllPosts() {
  if (!Array.isArray(postsData)) {
    console.error('postsData is not an array:', postsData);
    return []; // Return an empty array if postsData is not an array
  }
  return Promise.all(postsData.map(async (post) => ({
    ...post,
    content: await processMarkdown(post.content)
  })));
}

export async function getPostsByTag(tag) {
  const filteredPosts = postsData.filter(post => post.tags && post.tags.includes(tag));
  return Promise.all(filteredPosts.map(async (post) => ({
    ...post,
    content: await processMarkdown(post.content)
  })));
}

export async function getArchivedPosts() {
  const allPosts = await getAllPosts();
  const archives = {};
  
  allPosts.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    if (!archives[year]) {
      archives[year] = [];
    }
    archives[year].push({
      ...post,
      date: date.toISOString() // Ensure consistent date format
    });
  });

  // Sort posts within each year
  Object.keys(archives).forEach(year => {
    archives[year].sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  return archives;
}

export async function getPostData(slug) {
  const post = postsData.find(p => p.slug === slug);
  if (!post) {
    return null; // Return null instead of throwing an error
  }
  
  return {
    ...post,
    content: await processMarkdown(post.content)
  };
}

export function getAllPostSlugs() {
  return postsData.map(post => post.slug);
}

// Add this new function to get a list of all valid paths
export function getAllPostPaths() {
  return postsData.map(post => ({
    params: { slug: post.slug }
  }));
}
