# amirsolo.com

The source code for my personal website and blog at [amirsolo.com](https://amirsolo.com)

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS ](https://tailwindcss.com)
- [MDX](https://mdxjs.com)

## Folder Structure

- `pages/*` • Static pages (e.g. /about ).
- `pages/blog/*` • Static pre-rendered blog pages.
- `public/*` • Static resources such as fonts, images, etc.
- `data/blog/*` • Blog posts using MDX.

```
├── README.md
├── package.json
│
├── components
│   └── Nav.jsx
│   └── Container.jsx
|
├── pages
│   └── index.jsx
│   └── about.jss
│
├── data
│   └── blog
|       └── blog-post.mdx
...
```

## Running Locally

```shell
$ git clone https://github.com/amirsolo/amirsolo.com.git
$ cd amirsolo.com
$ npm install
$ npm run dev
```

## Available scripts

```shell
# runs the app in development mode
$ npm run dev

# makes production build
$ npm run build

# runs the app in production mode
$ npm start
```

## Deployment

My site is hosted on [Vercel](https://vercel.com). Highly recommend it. Specially for Next.js projects.

## On Github

- I'm using [Dependabot](https://github.com/dependabot) to keep my dependecies up to date automatically.
- I've also installed [Imgbot](https://github.com/ImgBotApp) on this repo to compress and optimize my images.
