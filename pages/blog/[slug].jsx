import BlogLayout from '@/layout/BlogLayout.jsx'
import MDXComponents from '@/components/MDXComponents'

import { getFiles, getFileBySlug } from '@/utils/mdx'
import hydrate from 'next-mdx-remote/hydrate'

export default function Blog({ source, frontMatter }) {
  const content = hydrate(source, { components: MDXComponents })

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')
  // Generate an arrya of posts' slug
  const paths = posts.map((post) => ({
    params: { slug: post.replace('.mdx', '') }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  // Get Post's content and Post's front matter
  const post = await getFileBySlug('blog', slug)

  return { props: post }
}
