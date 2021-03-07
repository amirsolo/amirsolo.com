import Link from 'next/link'

import Container from '@/components/Container'
import SocialLinks from '@/components/SocialLinks'
import BlogCard from '@/components/BlogCard'
import ProjectCard from '@/components/ProjectCard'
import Devider from '@/components/Devider'

import { getAllFilesFrontMatter } from '@/utils/mdx'

// Track analytics goal
const trackGoal = (title) => {
  window.beampipe(title)
}

const Home = ({ recentPosts }) => {
  return (
    <Container>
      <div>
        <div className='introduction flex flex-col sm:items-center mb-12 mt-6'>
          <h1 className='text-4xl sm:text-5xl font-semibold text-gray-800 dark:text-gray-200 tracking-normarl mb-6'>
            Hey, I'm Amir
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 dark:text-gray-300 leading-6 mb-3'>
            I'm a Web Developer{' '}
            <p className='inline-block text-base sm:text-lg'>(in a nutshell)</p>
          </h2>
          <p className='text-lg md:font-medium text-left md:text-center  text-gray-700 dark:text-gray-300 mb-3'>
            I write on my{' '}
            <Link href='/blog'>
              <a className='text-primary-color'>Blog</a>
            </Link>{' '}
            and{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/theamirsolo'
              className='text-primary-color'
              onClick={(e) => trackGoal('Twitter')}
            >
              Twitter.
            </a>
            <br />I make videos on{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.youtube.com/channel/UCL0xUrtfYJfUqpDejChZovg'
              className='text-primary-color'
              onClick={(e) => trackGoal('Youtube')}
            >
              Youtube.
            </a>
            <br />I build apps on{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/amirsolo'
              className='text-primary-color'
            >
              Github.
            </a>
          </p>
          <p className='sm:font-medium text-gray-700 dark:text-gray-300 mt-2 mb-10'>
            <Link href='/about'>
              <a className='text-primary-color'>
                <span>More about me</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 492.004 492.004'
                  className='inline-block w-3 h-3 ml-1 text-primary-color'
                >
                  <path
                    d='M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
			c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
			v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
			c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
			l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z'
                  />
                </svg>
              </a>
            </Link>
          </p>

          <SocialLinks />
        </div>

        <Devider />

        <div className='Blog py-14'>
          <h2 className='text-2xl sm:text-3xl mb-3 font-semibold text-gray-800 dark:text-gray-300'>
            Recent Posts
          </h2>
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <Devider />

        <div className='projects my-10'>
          <h2 className='flex flex-row items-center text-2xl sm:text-3xl mb-3 font-semibold text-gray-800 dark:text-gray-300'>
            Projects
          </h2>
          <ProjectCard
            title='Bookimy'
            logo='/static/images/projects/bookimy-logo.png'
            description="A cusotimized and personal journaling app I'm making with NodeJS and React. I'm still working on it, So It's not quite ready yet."
            slug='bookimy'
          />
          <ProjectCard
            title='Youtube'
            logo='/static/images/projects/youtube-logo.png'
            description='I make videos on Youtube about software development and coding. Recently started a series called "Coding Vlog" where I show the process I go through when making apps and software.'
            slug='youtube'
          />
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  // filter the last 3 blog posts
  const filteredPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 3)

  return { props: { recentPosts: filteredPosts } }
}

export default Home
