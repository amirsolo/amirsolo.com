import Container from '@/components/Container'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { getAllFilesFrontMatter } from '@/utils/mdx'

const Blog = ({ posts }) => {
  return (
    <Container>
      <h1 className='text-4xl font-bold text-center text-gray-700 dark:text-gray-300'>
        Blog
      </h1>
      <p className='text-center text-lg mt-2 text-gray-700 dark:text-gray-300'>
        I write about software and tech here. hopfully you will find them
        helpful.
      </p>
      <div className='posts mt-8 sm:mt-16'>
        {posts.map((post) => {
          return <BlogCard key={post.slug} {...post} />
        })}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default Blog
