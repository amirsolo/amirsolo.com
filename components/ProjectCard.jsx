import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ title, description, slug, logo }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <a className='flex flex-col sm:flex-row sm:justify-start justify-center items-center my-8 p-4 rounded-md shadow hover:shadow-md dark:bg-dark-secondary group'>
        <div>
          <div className='icon-container w-12 h-12 flex flex-row justify-center items-center rounded-full bg-gray-200 dark:bg-gray-800'>
            <Image src={logo} width={30} height={30} />
          </div>
        </div>
        <div className='sm:flex sm:flex-col sm:ml-6'>
          <h3 className='font-semibold text-lg mt-1 sm:mt-0 text-center sm:text-left text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200'>
            {title}
          </h3>
          <p className='tracking-tight sm:tracking-normal mt-2 sm:mt-1 text-center sm:text-left text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-200'>
            {description}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default ProjectCard
