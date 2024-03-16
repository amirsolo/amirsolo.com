import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
        <link rel='canonical' href={`https://amirsolo.com${router.asPath}`} />
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
      <div style={{
        backgroundColor: '#f0f4f8', // subtle modern color
        color: '#333',
        textAlign: 'center',
        padding: '10px 0',
        fontSize: '16px',
        fontWeight: 'bold'
      }}>
        Heads up! This site was crafted years ago and stands as an archive. For the latest about me, check out my <a href="https://www.linkedin.com/in/amirsolo/" style={{color: '#0077b5'}}>LinkedIn</a>.
      </div>
      <Nav />
      <main className='flex flex-col justify-center bg-gray-50 dark:bg-dark-primary max-w-3xl mx-auto py-8 sm:py-10 px-7 sm:px-6 md:px-5'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
