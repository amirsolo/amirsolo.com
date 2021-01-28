import Link from 'next/link'
import Container from '@/components/Container'

export default function NotFound() {
  return (
    <Container title='404 (Not Found) – Amir Solo'>
      <div className='flex flex-col justify-center items-start text-center'>
        <div className='text-6xl sm:text-8xl font-bold mb-3 w-full flex flex-row justify-center text-center'>
          404
        </div>
        <h1 className='w-full text-center text-3xl sm:text-5xl font-bold smb-8 text-gray-800 dark:text-gray-200'>
          Not Found
        </h1>
        <p className='mt-8 w-full text-center text-gray-800 dark:text-gray-300'>
          Something might have existed here or the link you've clicked was
          broken. But I'm guessing you spelled something wrong.
          <br />
          Can you double check the URL?
        </p>
        <Link href='/'>
          <a className='w-40 p-2 sm:px-4 sm:py-3 mt-12 font-semibold mx-auto text-center rounded border text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-dark-secondary'>
            Back Home
          </a>
        </Link>
      </div>
    </Container>
  )
}
