import Link from 'next/link'

const BlogCard = ({ title, summary, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className='inline-block w-full py-0.5 px-5 my-5 border-l-2 border-primary-color dark:border-primary-color group hover:border-gray-800 dark:hover:border-gray-300 '>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-lg md:text-xl md:mb-1 text-gray-700 dark:text-gray-300'>
            {title}
          </h2>
          <p className='tracking-tight sm:tracking-normal text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-100'>
            {summary}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default BlogCard
