import Link from 'next/link'

const BlogCard = ({ title, summary, slug, publishedAt, home }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className='inline-block w-full py-0.5 px-5 my-5 border-l border-gray-400 dark:border-gray-600 group hover:border-gray-800 dark:hover:border-gray-300 '>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-lg mb-1 text-primary-color'>
            {title}
          </h2>
          <p className='tracking-tight sm:tracking-normal text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300'>
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
