//const fs = require('fs');
const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');
const slugify = require('slugify'); // You'll need to install this package

const postsDirectory = path.join(process.cwd(), 'posts');
const postsOutputFile = path.join(process.cwd(), 'cache/posts-data.json');
const tagsOutputFile = path.join(process.cwd(), 'cache/tags-data.json');

async function generatePostsData() {
  await fs.mkdir(path.dirname(postsOutputFile), { recursive: true });

  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents)

    // Create a slug for each tag
    if (data.tags && Array.isArray(data.tags)) {
      data.tagSlugs = data.tags.map(tag => slugify(tag, { lower: true }));
    }

    return {
      slug,
      ...data,
      content
    };
  }));
  
  allPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));


  await fs.writeFile(postsOutputFile, JSON.stringify(allPostsData));

  // Generate tags data
  const tagData = {};
  allPostsData.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag, index) => {
        const sluggedTag = post.tagSlugs[index];
        if (!tagData[sluggedTag]) {
          tagData[sluggedTag] = { name: tag, count: 0 };
        }
        tagData[sluggedTag].count += 1;
      });
    }
  });

  // Only keep tags with at least one post
  const validTags = Object.entries(tagData)
    .filter(([_, data]) => data.count > 0)
    .map(([slug, data]) => ({ slug, name: data.name }));

  await fs.writeFile(tagsOutputFile, JSON.stringify(validTags));

  console.log('Posts and tags data generated successfully.');
}

generatePostsData();