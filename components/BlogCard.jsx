import Link from 'next/link'

const BlogCard = ({ title, summary, slug, publishedAt, home }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className='inline-block w-full py-1 px-6 my-5 border-l-2  border-gray-500 dark:border-gray-400 hover:border-primary-color dark:hover:border-primary-color'>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-lg mb-2 text-primary-color'>
            {title}
          </h2>
          <p className='tracking-tight sm:font-medium text-gray-600 dark:text-gray-400 '>
            {summary}
          </p>
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
