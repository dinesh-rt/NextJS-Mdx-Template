import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import InfoBox from './InfoBox'

const Counter = dynamic(() => import('./Counter').then(mod => mod.Counter), { ssr: false })

const MDXComponents = {
  img: (props) => (
    <Image
      {...props}
      width={600}
      height={400}
      layout="responsive"
      objectFit="cover"
    />
  ),
  a: ({ href, children }) => {
    if (href.startsWith('/')) {
      return <Link href={href}>{children}</Link>
    }
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  },
  Counter,
  InfoBox,
  // Add any other custom components you want to use in your MDX here
}

export default MDXComponents

