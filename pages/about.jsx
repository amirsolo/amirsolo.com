import Container from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <Container title='About me - Amir Solo'>
      <div className='about-page'>
        <h1 className='text-2xl font-bold text-gray-700'>About Me</h1>
        <div>
          <p></p>
          {/* <Image
            src='/static/images/avatar-wide.jpg'
            width={2184}
            height={1440}
            className='rounded-md'
          /> */}
          <video autoPlay loop className='rounded-2xl'>
            <source src='/static/me.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </Container>
  )
}

export default About
