import Link from 'next/link'

import Container from '@/components/Container'
import SocialLinks from '@/components/SocialLinks'
import BlogCard from '@/components/BlogCard'
import Devider from '@/components/Devider'

export default function Home() {
  return (
    <Container>
      <div>
        <div className='introduction pb-14'>
          <h1 className='text-4xl md:text-5xl font-semibold text-gray-800 dark:text-gray-200 tracking-normarl mb-5'>
            Hey, I'm Amir
          </h1>

          <h2 className='text-lg  text-gray-700 dark:text-gray-300 mb-3 md:mb-0'>
            I'm a web developer (in a nutshell), If you want to know more about
            me check out the{' '}
            <Link href='/about'>
              <a className='text-primary-color'>about page.</a>
            </Link>
          </h2>

          <h3 className='text-lg  text-gray-700 dark:text-gray-300 mb-5'>
            I also write about software development on my{' '}
            <Link href='/about'>
              <a className='text-primary-color'>blog</a>
            </Link>{' '}
            and{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/theamirsolo'
              className='text-primary-color'
            >
              twitter.
            </a>{' '}
            If you'd like to get in touch with me, you can always{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:theamirsolo@gmail.com'
              className='text-primary-color'
            >
              email
            </a>{' '}
            me.
          </h3>

          <SocialLinks />
        </div>

        <Devider />

        <div className='Blog my-14'>
          <h2 className='text-3xl mb-3 font-semibold text-gray-800 dark:text-gray-300'>
            Recent Posts
          </h2>
          <BlogCard
            title='The Fist Post on My Blog'
            summary='This is going to be the first blog post on my personal website where I basically talk about whatever just to display it on the main page.'
            publishedAt='Jan 23, 2021'
            slug='the-first-post-on-my-blog'
            home
          />
          <BlogCard
            title="Second Post on Amir's Blog"
            summary='Yep, This is the second dummy post on the home page. Again nothing to read, Just for aesthetics :)'
            publishedAt='Jan 19, 2021'
            slug='the-first-post-on-my-blog'
            home
          />
          <BlogCard
            title='Hello Beautiful World'
            summary='Tempora veritatis ut ipsum saepe velit dolores repellendus commodi! Perspiciatis aspernatur in minus quos sapiente labore, sunt a quae praesentium obcaecati explicabo!'
            publishedAt='Jan 16, 2021'
            slug='the-first-post-on-my-blog'
            home
          />
        </div>

        <Devider />

        <div className='projects my-14'>????????</div>
      </div>
    </Container>
  )
}
