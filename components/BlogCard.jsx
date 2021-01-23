import Link from 'next/link'

const BlogCard = ({ title, summary, slug, publishedAt, home }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className='inline-block w-full py-2 px-6 my-5 md:my-4 border-l-4  border-primary-color hover:border-gray-800 dark:hover:border-blue-200 dark:bg-dark-primary'>
        <div className='flex flex-col'>
          <h2 className='text-xl font-medium mb-2 text-gray-800 dark:text-gray-300 '>
            {title}
          </h2>
          <p className=' text-gray-600 dark:text-gray-400 '>{summary}</p>
          {!home ? (
            <p className='text-xs font-normal text-gray-500 dark:text-gray-500 mt-5'>
              • {publishedAt}
            </p>
          ) : null}
        </div>
      </a>
    </Link>
  )
}

export default BlogCard
