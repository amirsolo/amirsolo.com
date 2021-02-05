import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'data', type))

  return files.map((fileSlug) => {
    const file = fs.readFileSync(
      path.join(root, 'data', type, fileSlug),
      'utf-8'
    )
    const { data } = matter(file)

    return {
      ...data,
      slug: fileSlug.replace('.mdx', '')
    }
  })
}
