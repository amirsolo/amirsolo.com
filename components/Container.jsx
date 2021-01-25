import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from '@/components/Nav'

export default function Container({ children, ...customMeta }) {
  const router = useRouter()
  const meta = {
    title: 'Amir Solo – Software Developer',
    description: `Software developer, Creator, JavaScript enthusiast.`,
    image: 'https://amirsolo.com/static/images/banner.jpg',
    type: 'website',
    ...customMeta
  }

  return (
    <div className='bg-gray-50 dark:bg-dark-primary'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://amirsolo.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Amir Solo' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@theamirsolo' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <Nav />
      <main className='flex flex-col justify-center bg-gray-50 dark:bg-dark-primary max-w-3xl mx-auto py-10 px-7 sm:px-6 md:px-5'>
        {children}
      </main>
    </div>
  )
}
