import Container from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <Container title='About me - Amir Solo'>
      <div className='about-page'>
        <h1 className='text-2xl font-bold text-gray-700 dark:text-gray-300'>
          About Me
        </h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci,
            consequuntur eos, eaque animi quae fugiat officiis hic quam earum
            expedita temporibus dolor distinctio eveniet cupiditate quis qui
            voluptate maiores!
          </p>
          <div className='flex flex-row justify-center items-center my-10 '>
            <video
              muted
              autoPlay
              loop
              className='rounded-lg w-64 md:w-96 shadow-2xl'
            >
              <source src='/static/me.webm' type='video/webm' />
              <source src='/static/me.mp4' type='video/mp4' />
              <p>Sorry, your browser doesn't support embedded videos!</p>
            </video>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
