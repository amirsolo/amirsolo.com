import Link from 'next/link'
import Container from '@/components/Container'
import Item from '@/components/Item'
import ExternalLink from '@/components/ExternalLink'

const About = () => {
  return (
    <Container title='About me - Amir Solo'>
      <h1 className='text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300'>
        About me
      </h1>
      <div className='flex flex-col md:my-10 md:flex-row items-center justify-center'>
        <p className='mt-5 md:pr-8 md:mt-0 md:text-lg text-gray-700 dark:text-gray-300'>
          Hey, I'm Amir. I'm a self-learning full stack developer, specializing
          in JavaScript.
          <br />I don't know everything, But I'm a really curious guy with a
          great passion for making different things. That's why I spend a lot of
          time building software and apps.
          <br />
          And I spend my free time playing basketball, working out, and watching
          Youtube and{' '}
          <ExternalLink href='https://www.imdb.com/title/tt0108778/'>
            Friends.
          </ExternalLink>
        </p>

        <div className='w-64 flex flex-col justify-center items-center my-8 md:my-0'>
          <video loop autoPlay muted className='rounded-lg shadow-2xl'>
            <source src='/static/me.webm' type='video/webm' />
            <source src='/static/me.mp4' type='video/mp4' />
          </video>
          <p className='w-64 text-xs text-center text-gray-400 dark:text-gray-600'>
            Hello world!
          </p>
        </div>
      </div>

      <div className='contact my-10'>
        <h2 className='text-3xl mb-5 font-bold text-gray-700 dark:text-gray-300'>
          Contact
        </h2>
        <p className='md:text-lg text-gray-700 dark:text-gray-300'>
          Feel free to email me at{' '}
          <ExternalLink
            className='inline-block mb-2 md:mb-0'
            href='mailto:me@amirsolo.com'
          >
            me@amirsolo.com
          </ExternalLink>
          <br />
          You can also find me on{' '}
          <ExternalLink href='https://twitter.com/theamirsolo'>
            Twitter{' '}
          </ExternalLink>
          where I talk about development and ideas that I find interesting.
        </p>
        <div className='socials flex flex-row mt-5'>
          <ExternalLink className='mr-5' href='https://twitter.com/theamirsolo'>
            <span className='sr-only'>Twitter</span>
            <svg
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            >
              <path d='m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0' />
            </svg>
          </ExternalLink>

          <ExternalLink
            className='mr-5'
            href='https://www.youtube.com/channel/UCL0xUrtfYJfUqpDejChZovg'
          >
            <span className='sr-only'>Youtube</span>
            <svg
              fill='currentColor'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            >
              <path d='m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0' />
              <path d='m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0' />
            </svg>
          </ExternalLink>
          <ExternalLink className='mr-5' href='https://github.com/amirsolo'>
            <span className='sr-only'>Github</span>
            <svg
              fill='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            >
              <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
            </svg>
          </ExternalLink>
          <ExternalLink
            className='mr-5'
            href='https://www.linkedin.com/in/amirsolo/'
          >
            <span className='sr-only'>Linkedin</span>
            <svg
              fill='currentColor'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            >
              <path d='m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0' />
            </svg>
          </ExternalLink>
        </div>
      </div>

      <div className='activities my-10'>
        <h2 className='text-3xl mb-5 font-bold text-gray-700 dark:text-gray-300'>
          Activities
        </h2>

        <Item title='I make videos on Youtube'>
          In my{' '}
          <ExternalLink href='https://www.youtube.com/channel/UCL0xUrtfYJfUqpDejChZovg'>
            channel
          </ExternalLink>{' '}
          I share some ideas and knowledge I learn throughout the process of
          making software, combined with a bit entertaiment.
        </Item>
        <Item title='I write'>
          I write on my{' '}
          <Link href='/blog'>
            <a className='text-primary-color'>blog. </a>
          </Link>
          It's one of the best ways to keep track of software development and
          document whatever I learn as a blog post which I can easily refer to
          later.
        </Item>
        <Item title='I build apps'>
          I'm usually building in the open. You can checkout my work on{' '}
          <ExternalLink href='https://github.com/amirsolo'>
            Github.
          </ExternalLink>{' '}
        </Item>
      </div>

      <div className='tech-stack my-10'>
        <h2 className='text-3xl font-bold text-gray-700 dark:text-gray-300'>
          Tech stack
        </h2>
        <h3 className='mb-5 my-1 text-gray-700 dark:text-gray-400'>
          The teck stack I currently use for making apps: (for nerds!)
        </h3>
        <Item title='React'>
          <ExternalLink href='https://reactjs.org'>React</ExternalLink> is a
          JavaScript library for building user interfaces. It's fast, efficient
          and easy to use. I started using it in 2016 and loved it ever since.
        </Item>
        <Item title='Next.js'>
          <ExternalLink href='https://nextjs.org'>Next.js</ExternalLink> is a
          React framework. "THE React framework" as they call it, and they are
          not wrong, It's my default choice when making apps with React.
        </Item>
        <Item title='Node.js'>
          <ExternalLink href='https://nodejs.org'>Node.js</ExternalLink> is a
          JavaScript runtime. I use it with{' '}
          <ExternalLink href='https://expressjs.com/'>Express</ExternalLink>{' '}
          (which is a Node.js framework) for building back-ends and APIs.
        </Item>

        <Link href='/uses'>
          <a className='inline-block font-medium mt-1 p-1 text-primary-color border-b border-primary-color'>
            Full list
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 492.004 492.004'
              className='inline-block w-3 h-3 ml-2 text-primary-color'
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
      </div>
    </Container>
  )
}

export default About
