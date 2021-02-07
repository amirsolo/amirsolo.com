import Image from 'next/image'
import Link from 'next/link'
import Item from '@/components/Item'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && href.startsWith('/')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />
}
export default {
  a: CustomLink,
  Image,
  Item
}
