import { getAboutData } from '../lib/getAboutData'
import SidebarContent from './SidebarContent'

export default async function Sidebar() {
  const { frontmatter } = await getAboutData()
  return <SidebarContent frontmatter={frontmatter} />
}