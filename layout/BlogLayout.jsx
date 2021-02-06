import Container from '@/components/Container'

export default function BlogLayout({ frontMatter, children }) {
  return (
    <Container title={`${frontMatter.title} – Amir Solo`}>
      <div className='prose dark:prose-dark'>{children}</div>
    </Container>
  )
}
