import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkWikiLink from './remarkWikiLink';

export async function processMarkdown(content) {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkWikiLink)
    .use(html, { sanitize: false }) // Allow raw HTML in the markdown
    .process(content);
  return result.toString();
}