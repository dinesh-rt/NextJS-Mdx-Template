import { getAllPosts } from '../../lib/posts';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    const allPosts = await getAllPosts();
    const searchResults = allPosts.filter(post => 
      post.title.toLowerCase().includes(q.toLowerCase()) ||
      post.content.toLowerCase().includes(q.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(q.toLowerCase())))
    );

    res.status(200).json(searchResults);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}