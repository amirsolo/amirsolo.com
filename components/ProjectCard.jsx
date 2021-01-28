import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ title, description, slug, logo }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <a className='flex flex-col sm:flex-row sm:justify-start justify-center items-center my-5 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700'>
        <div>
          <div className='icon-container w-12 h-12 flex flex-row justify-center items-center rounded-full bg-gray-200 dark:bg-gray-800'>
            <Image src={logo} width={30} height={30} />
          </div>
        </div>
        <div className='sm:flex sm:flex-col sm:ml-6'>
          <h3 className='font-bold text-lg sm:text-xl mt-1 sm:mt-0 text-center sm:text-left text-gray-700 dark:text-gray-300'>
            {title}
          </h3>
          <p className='text-sm sm:text-base font-medium mt-2 sm:mt-1 text-center sm:text-left text-gray-700 dark:text-gray-400'>
            {description}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default ProjectCard
