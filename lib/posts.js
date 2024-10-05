import postsData from '../cache/posts-data.json';
import tagsData from '../cache/tags-data.json';

export async function getPostData(slug) {
  const post = postsData.find(p => p.slug === slug);

  if (!post) {
    return null;
  }

  return {
    ...post,
    content: post.content, // Return the content as a string
    excerpt: post.content.slice(0, 200) + '...', // Add excerpt if needed

  };
}

// Get all post slugs (useful for dynamic routes)
export function getAllPostSlugs() {
  return postsData.map(post => post.slug);
}

// Get all post paths for dynamic routing
export function getAllPostPaths() {
  return postsData.map(post => ({
    params: { slug: post.slug },
  }));
}

// Get all posts, sorted by date
export async function getAllPosts() {
  return postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get recent posts (limit to 5 posts)
export async function getRecentPosts() {
  const recentPosts = postsData.slice(0, 5); // Get the first 5 posts
  return recentPosts;
}

// Get archived posts, grouped by year
export async function getArchivedPosts() {
  const archives = {};

  // Group posts by year
  postsData.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    if (!archives[year]) {
      archives[year] = [];
    }
    archives[year].push({
      ...post,
      date: date.toISOString(),
    });
  });

  // Sort posts within each year
  Object.keys(archives).forEach(year => {
    archives[year].sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  return archives;
}


export function getSortedPostsData() {
  return postsData;
}

export function getAllTags() {
  return tagsData;
}

export function getPostsByTag(tagSlug) {
  return postsData.filter(post => post.tagSlugs && post.tagSlugs.includes(tagSlug));
}

export function getTagBySlug(tagSlug) {
  return tagsData.find(tag => tag.slug === tagSlug);
}