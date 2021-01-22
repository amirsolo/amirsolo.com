import Nav from '@/components/Nav'

export default function Container({ children }) {
  return (
    <div className='bg-white dark:bg-dark'>
      <Nav />
      <main className='flex flex-col justify-center bg-white dark:bg-dark max-w-4xl mx-auto my-5 py-3 md:py-5 px-7 sm:px-6 md:px-5 '>
        {children}
      </main>
    </div>
  )
}
