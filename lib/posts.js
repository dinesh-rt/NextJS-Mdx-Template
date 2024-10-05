import postsData from '../cache/posts-data.json';
import remarkGfm from 'remark-gfm';

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

// // Get data for a single post based on slug
// export async function getPostData(slug) {
//   const post = postsData.find(p => p.slug === slug);

//   if (!post) {
//     return null; // Return null if post is not found
//   }

//   const { serialize } = await import('next-mdx-remote/serialize');

//   // Process MDX or Markdown content using next-mdx-remote's serialize
//   const mdxSource = await serialize(post.content, {
//     mdxOptions: {
//       remarkPlugins: [remarkGfm], // Use GitHub-flavored markdown plugin
//     },
//     scope: post, // Include frontmatter in scope
//   });

//   return {
//     ...post,
//     content: mdxSource, // Return the processed content
//     excerpt: post.content.slice(0, 200) + '...', // Add excerpt if needed
//   };
// }

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

// Get all unique tags from the posts data
export function getAllTags() {
  const tagSet = new Set();
  postsData.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tagSet.add(tag));
    }
  });
  return Array.from(tagSet);
}

// Get posts by a specific tag
export async function getPostsByTag(tag) {
  const filteredPosts = postsData.filter(post => post.tags && post.tags.includes(tag));
  return filteredPosts;
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
