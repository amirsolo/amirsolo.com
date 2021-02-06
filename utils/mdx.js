import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'

import MDXComponents from '@/components/MDXComponents'

const root = process.cwd()

export async function getFiles(type) {
  // Get all files in specified directory (posts, articles)
  const files = fs.readdirSync(path.join(root, 'data', type))

  // 1- Make sure Its only reading .mdx files by checking the extension
  return files.filter(
    (fileName) => fileName.substr(fileName.length - 4) === '.mdx'
  )
}

export async function getAllFilesFrontMatter(type) {
  // Get all files in specified directory
  const files = fs.readdirSync(path.join(root, 'data', type))

  // 1- Make sure Its only reading .mdx files by checking the extension
  // 2- Read files and get their font matter
  return files
    .filter((fileName) => fileName.substr(fileName.length - 4) === '.mdx')
    .map((fileName) => {
      const file = fs.readFileSync(
        path.join(root, 'data', type, fileName),
        'utf-8'
      )
      const { data } = matter(file)

      return {
        ...data,
        slug: fileName.replace('.mdx', '')
      }
    })
}

export async function getFileBySlug(type, slug) {
  // Get file by slug (.mdx file)
  const file = fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`))

  // Get content and frontMatter
  const { content, data } = matter(file)

  const mdxSource = await renderToString(content, {
    components: MDXComponents
  })

  return {
    source: mdxSource,
    frontMatter: {
      slug: slug,
      ...data
    }
  }
}
