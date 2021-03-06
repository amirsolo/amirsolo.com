import Container from '@/components/Container'
import Image from 'next/image'

const HeadLine = ({ name }) => (
  <p className='inline-block px-2 mt-4 text-lg text-gray-700 dark:text-gray-300 border-b-4 border-gray-300 dark:border-gray-600'>
    {name}
  </p>
)

const StackItem = ({ name, image, href, description }) => {
  return (
    <a
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      className='flex flex-row my-2 px-0 py-4 sm:px-4 rounded-xl hover:shadow dark:hover:bg-dark-secondary'
    >
      <div className='flex flex-col justify-start items-start flex-0'>
        <Image
          src={`/static/images/stack/${image}`}
          width={64}
          height={64}
          layout='fixed'
          alt={`${name} icon`}
          className='rounded-xl'
        />
      </div>
      <div className='flex flex-col flex-1 pl-4'>
        <h3 className='font-semibold text-lg text-gray-700 dark:text-gray-300'>
          {name}
        </h3>
        <p className='text-gray-600 dark:text-gray-400'>{description}</p>
      </div>
    </a>
  )
}

const Stack = () => {
  return (
    <Container title='My Tech Stack – Amir Solo'>
      <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-gray-300'>
        My Stack
      </h1>
      <p className='text-center sm:text-lg mt-2 text-gray-700 dark:text-gray-300'>
        The tech stack I'm currently using to build apps and software.
      </p>
      <div className='stack-list mt-8 sm:mt-16 sm:px-8'>
        <HeadLine name='Front End' />
        <StackItem
          name='React'
          image='react.png'
          href='https://reactjs.org'
          description={`React is a
          JavaScript library for building UIs. You probably knew that already :) I started using it in 2018 and loved it ever since.`}
        />
        <StackItem
          name='Next.js'
          image='nextjs.png'
          href='https://nextjs.org'
          description={`"THE React framework" as they call it, and they are not wrong, It's my default approach when making modern apps with React.`}
        />
        <StackItem
          name='Tailwind CSS'
          image='tailwind.png'
          href='https://tailwindcss.com'
          description={`Tailwind is a utility-first CSS framework. It's abstract enough to give me freedom, opinionated enough so I don’t get stuck making low-level decisions.`}
        />
        <StackItem
          name='Chakra UI'
          image='chakra.png'
          href='http://chakra-ui.com'
          description={`If I want to spend less time on design, I go with component libraries like Chakra. It's like having a desginer helping you out!`}
        />

        <HeadLine name='Back End' />

        <StackItem
          name='Node.js'
          image='nodejs.png'
          href='https://nodejs.org'
          description={`Node.js is a JavaScript runtime. It makes me able to write JavaScript on the server making Web apps and APIs.`}
        />
        <StackItem
          name='Express.js'
          image='expressjs.png'
          href='https://expressjs.com'
          description={`Express.js is my go-to framework for building web applications using Node.js.`}
        />
        <StackItem
          name='Firebase'
          image='firebase.png'
          href='https://firebase.google.com'
          description={`I use Firebase on my personal projects. It makes it really easy to have a back-end up and running quickly.`}
        />
        <StackItem
          name='MongoDB'
          image='mongodb.png'
          href='https://www.mongodb.com'
          description={`The way MongoDB works compared to relational databases makes me able to move easier and faster on most projects.`}
        />
        <StackItem
          name='PostgreSQL'
          image='postgres.png'
          href='https://www.postgresql.org'
          description={`If there is a need for relational, SQL databases. I would go with Postgres, I think It's better adapted in JavaScript ecosystem compared to other SQL databases.`}
        />

        <HeadLine name='Large Projects' />

        <StackItem
          name='TypeScript'
          image='typescript.png'
          href='https://www.typescriptlang.org'
          description={`It's JavaScript on Steroids! It's a MUST when I'm working on larger projects.`}
        />
        <StackItem
          name='GraphQL'
          image='graphql.png'
          href='https://graphql.org/'
          description={`I'm not very fond of GraphQL, But I've seen how helpful it can be comapred to REST, since you have more freedom.`}
        />
        <StackItem
          name='Cypress'
          image='cypress.png'
          href='https://www.cypress.io/'
          description={`Cypress provides a better developer experience compared to other end-to-end testing frameworks. That's why I use it to automate website testing.`}
        />
        <StackItem
          name='Jest'
          image='jest.png'
          href='https://jestjs.io/'
          description={`Jest is my go-to unit testing framework. Don't get me wrong though, I still don't like writing tests :) But if I have to, I'll use Jest.`}
        />
      </div>
    </Container>
  )
}

export default Stack
