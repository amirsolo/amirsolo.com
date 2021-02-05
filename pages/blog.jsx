import { useState } from 'react'
import { getAllFilesFrontMatter } from '@/utils/mdx'

import Container from '@/components/Container'
import BlogCard from '@/components/BlogCard'

const Blog = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('')

  // Sort posts based on publish date & filter out based on search value
  const filteredPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((postFrontMatter) => {
      return (
        postFrontMatter.title
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        postFrontMatter.summary
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    })

  return (
    <Container
      title='Blog – Amir Solo'
      description='Thoughts and ideas about software, teck, and sometimes my personal life.'
    >
      <h1 className='text-4xl font-bold text-center text-gray-700 dark:text-gray-300'>
        Blog
      </h1>
      <p className='text-center text-lg mt-2 text-gray-700 dark:text-gray-300'>
        Thoughts and ideas about software, teck and sometimes my personal life.
      </p>
      <div className='search-box relative my-8'>
        <label htmlFor='search' className='absolute top-3 right-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-5 h-5 text-gray-500 dark:text-gray-500'
          >
            <circle cx='11' cy='11' r='8'></circle>
            <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
          </svg>
        </label>
        <input
          type='text'
          id='search'
          placeholder='Search articles...'
          aria-label='Search posts'
          autoComplete='off'
          className='w-full px-4 py-2 rounded-md border text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 outline-none focus:border-transparent dark:focus:border-transparent focus:ring-2 ring-blue-400 bg-gray-100 dark:bg-dark-secondary'
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className='posts mt-5'>
        {filteredPosts.length ? (
          filteredPosts.map((post) => {
            return <BlogCard key={post.slug} {...post} />
          })
        ) : (
          <div className=' mt-2 mb-20 flex flex-row items-center font-semibold text-gray-600 dark:text-gray-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-7 h-7 mr-3'
            >
              <circle cx='12' cy='12' r='10'></circle>
              <line x1='12' y1='8' x2='12' y2='12'></line>
              <line x1='12' y1='16' x2='12.01' y2='16'></line>
            </svg>
            <p className='text-lg sm:text-xl'>No Posts Found.</p>
          </div>
        )}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default Blog
