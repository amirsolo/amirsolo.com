const title = 'Amir Solo - Software developer'
const description = 'Software developer, Creator, JavaScript enthusiast.'

const SEO = {
  title,
  description,
  canonical: 'https://amirsolo.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://amirsolo.com',
    title,
    description,
    images: [
      {
        url: 'https://amirsolo.com/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@theamirsolo',
    site: '@theamirsolo',
    cardType: 'summary_large_image'
  }
}

export default SEO
