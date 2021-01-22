import Container from '@/components/Container'
import SocialLinks from '@/components/SocialLinks'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <div>
        <div className='introduction'>
          <h1 className='text-4xl md:text-5xl font-semibold text-gray-800 dark:text-gray-200 tracking-normarl mb-5'>
            Hey, I'm Amir
          </h1>

          <h2 className='text-lg md:font-medium text-gray-700 dark:text-gray-300 mb-3 md:mb-0'>
            I'm a web developer (in a nutshell), If you want to know more about
            me check out the{' '}
            <Link href='/about'>
              <a className='text-brand-blue border-b-1 border-brand-blue'>
                about page.
              </a>
            </Link>
          </h2>

          <h3 className='text-lg md:font-medium text-gray-700 dark:text-gray-300 mb-5'>
            I also write about software development on my{' '}
            <Link href='/about'>
              <a className='text-brand-blue border-b-1 border-brand-blue'>
                blog
              </a>
            </Link>{' '}
            and{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/theamirsolo'
              className='text-brand-blue border-b-1 border-brand-blue'
            >
              twitter.
            </a>{' '}
            If you'd like to get in touch with me, you can always{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:theamirsolo@gmail.com'
              className='text-brand-blue underline'
            >
              email
            </a>{' '}
            me.
          </h3>

          <SocialLinks />
        </div>
      </div>
    </Container>
  )
}
