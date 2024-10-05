import { visit } from 'unist-util-visit'
import slugify from 'slugify'

export default function remarkWikiLink() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const matches = node.value.match(/\[\[(.+?)\]\]/g)
      if (matches) {
        const children = []
        let lastIndex = 0
        matches.forEach(match => {
          const startIndex = node.value.indexOf(match, lastIndex)
          if (startIndex > lastIndex) {
            children.push({
              type: 'text',
              value: node.value.slice(lastIndex, startIndex)
            })
          }
          const content = match.slice(2, -2)
          const [linkText, linkUrl] = content.split('|')
          const url = linkUrl ? linkUrl : slugify(linkText, {lower: true})
          children.push({
            type: 'link',
            url: `/posts/${url}`,
            children: [{type: 'text', value: linkText}],
            data: {
              hProperties: {
                className: 'wiki-link'
              }
            }
          })
          lastIndex = startIndex + match.length
        })
        if (lastIndex < node.value.length) {
          children.push({
            type: 'text',
            value: node.value.slice(lastIndex)
          })
        }
        parent.children.splice(index, 1, ...children)
        return [visit.SKIP, index + children.length]
      }
    })
  }
}