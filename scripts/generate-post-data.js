const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const slugify = require('slugify'); // You'll need to install this package

const postsDirectory = path.join(process.cwd(), 'posts');
const postsOutputFile = path.join(process.cwd(), 'cache/posts-data.json');
const tagsOutputFile = path.join(process.cwd(), 'cache/tags-data.json');

function generatePostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
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
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(postsOutputFile, JSON.stringify(allPostsData));

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

  fs.writeFileSync(tagsOutputFile, JSON.stringify(validTags));

  console.log('Posts and tags data generated successfully.');
}

generatePostsData();