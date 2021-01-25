import Document, { Html, Head, Main, NextScript } from 'next/document'

class Mydocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* General  */}
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <meta name='yandex-verification' content='c180f25418c9d98a' />
          {/* Manifest and incons */}
          <link rel='manifest' href='/static/favicons/site.webmanifest' />
          <link rel='shortcut icon' href='/static/favicons/favicon.ico' />
          <link
            href='/static/favicons/favicon-32x32.png'
            rel='icon'
            sizes='32x32'
            type='image/png'
          />
          <link
            href='/static/favicons/favicon-16x16.png'
            rel='icon'
            sizes='16x16'
            type='image/png'
          />
          <meta name='theme-color' content='#0d1117' />
          {/* Apple */}
          <link
            href='/static/favicons/apple-touch-icon.png'
            rel='apple-touch-icon'
            sizes='180x180'
          />
          <link
            rel='mask-icon'
            href='/static/favicons/safari-pinned-tab.svg'
            color='#1992d4'
          />
          {/* Microsoft */}
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-config'
            content='/static/favicons/browserconfig.xml'
          />
          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-QF0D47Y1VH`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-QF0D47Y1VH', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
        </Head>
        <body className='bg-gray-50 text-gray-900 dark:bg-dark-primary dark:text-gray-50'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Mydocument
