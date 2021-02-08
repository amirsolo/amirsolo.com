import Container from '@/components/Container'
import Image from 'next/image'

import { parseISO, format } from 'date-fns'

export default function BlogLayout({ frontMatter, children }) {
  return (
    <Container
      title={`${frontMatter.title} – Amir Solo`}
      description={frontMatter.summary}
      image={`https://amirsolo.com${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type='article'
    >
      <div className='prose dark:prose-dark max-w-none w-full'>{children}</div>
    </Container>
  )
}
