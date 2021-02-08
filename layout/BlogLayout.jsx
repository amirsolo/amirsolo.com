import Container from '@/components/Container'
import ExternalLink from '@/components/ExternalLink'
import { parseISO, format } from 'date-fns'

const getGithubEditUrl = (slug) =>
  `https://github.com/amirsolo/amirsolo.com/edit/main/data/blog/${slug}.mdx`

export default function BlogLayout({ frontMatter, children }) {
  const { title, summary, image, readingTime, publishedAt, slug } = frontMatter

  return (
    <Container
      title={`${title} – Amir Solo`}
      description={summary}
      image={`https://amirsolo.com${image}`}
      date={new Date(publishedAt).toISOString()}
      type='article'
    >
      <article className=''>
        <div className='header mb-10'>
          <h1 className='text-4xl sm:text-5xl font-bold'>{title}</h1>
          <p className='pl-3 border-l-4 border-gray-400 font-medium flex flex-row items-center justify-start mt-5 text-xs sm:text-base text-gray-600 dark:text-gray-400'>
            {readingTime.text}
          </p>
        </div>
        <div className='prose dark:prose-dark max-w-none w-full'>
          {children}
        </div>

        <div className='mt-14 pr-4 sm:border-r-4 border-gray-400 flex flex-row justify-center sm:justify-end text-gray-700 dark:text-gray-300'>
          <p>{format(parseISO(publishedAt), 'MMMM dd, yyyy')} • </p>
          <ExternalLink
            href={getGithubEditUrl(slug)}
            className='ml-1 hover:underline'
          >
            Edit on Github
          </ExternalLink>
        </div>
      </article>
    </Container>
  )
}
