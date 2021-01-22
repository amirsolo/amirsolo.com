import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import ToggleButton from './ToggleButton'

import { getCurrentRoute } from '@/lib/route.js'

export default function Nav() {
  const [mounted, setMounted] = useState(false)
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)
  const [currentRoute, setCurrentRoute] = useState(null)
  const [activePath, setActivePath] = useState('#')

  const router = useRouter()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // disable scrolling while the menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuExpanded ? 'hidden' : 'auto'
  }, [isMenuExpanded])

  // get current route
  useEffect(() => {
    getCurrentRoute(router.pathname, setCurrentRoute, setActivePath)
  }, [router.pathname])

  return (
    <div
      className='sticky-nav shadow-sm'
      style={{ borderBottom: '1px solid rgba(255,255,255, 0.1)' }}
    >
      <nav className='hidden bg-blury md:flex justify-between items-center my-0 py-5 px-7 w-full max-w-6xl mx-auto'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <a
              className={`inline-block font-medium text-gray-800 dark:text-gray-100 rounded-md px-4 mr-1 py-2 hover:bg-brand-blue hover:bg-opacity-20 ${
                activePath === '/'
                  ? 'text-brand-blue dark:text-brand-blue'
                  : null
              }`}
            >
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a
              className={`inline-block font-medium text-gray-800 dark:text-gray-100 rounded-md px-4 mr-1 py-2 hover:bg-brand-blue hover:bg-opacity-20 ${
                activePath === '/blog'
                  ? 'text-brand-blue dark:text-brand-blue'
                  : null
              }`}
            >
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a
              className={`inline-block font-medium text-gray-800 dark:text-gray-100 rounded-md px-4 mr-1 py-2 hover:bg-brand-blue hover:bg-opacity-20 ${
                activePath === '/about'
                  ? 'text-brand-blue dark:text-brand-blue'
                  : null
              }`}
            >
              About
            </a>
          </Link>
        </div>

        <ToggleButton mounted={mounted} theme={theme} setTheme={setTheme} />
      </nav>

      {/* what ever for mobile */}
      <nav className='mobile-menu my-0 md:hidden bg-blury'>
        <div className='upper-menu flex flex-row justify-between items-center py-4 px-7'>
          <div className='right-part flex flex-row justify-between items-center'>
            <button
              className='menu-icon w-7 h-7 cursor-pointer focus:outline-none'
              onClick={() => setIsMenuExpanded(!isMenuExpanded)}
            >
              {!isMenuExpanded ? (
                <svg
                  viewBox='-10 0 100 80'
                  className='w-6 h-6 text-black dark:text-gray-200'
                >
                  <rect
                    fill='currentColor'
                    className='w-20 h-2.5'
                    rx='8'
                  ></rect>
                  <rect
                    fill='currentColor'
                    className='w-20 h-2.5'
                    y='30'
                    rx='8'
                  ></rect>
                  <rect
                    fill='currentColor'
                    className='w-20 h-2.5'
                    y='60'
                    rx='8'
                  ></rect>
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='times w-6 h-6 text-black dark:text-gray-200'
                >
                  <line x1='18' y1='6' x2='6' y2='18'></line>
                  <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
              )}
            </button>

            <h3 className='ml-3 pl-1 text-xl font-medium text-gray-700 dark:text-gray-300'>
              {currentRoute}
            </h3>
          </div>
          <ToggleButton mounted={mounted} theme={theme} setTheme={setTheme} />
        </div>
        <div
          className={`lower-menu  w-full z-20 flex flex-row justify-center px-10 pt-24 ${
            isMenuExpanded ? 'h-screen' : 'hidden'
          }`}
        >
          <ul className='flex flex-col w-full justify-start items-center'>
            <li className='w-full text-center'>
              <Link href='/'>
                <a
                  className={`inline-block my-2 p-2 text-gray-700 dark:text-gray-200 hover:bg-brand-blue hover:text-white dark:hover:bg-opacity-20 rounded w-full font-bold text-2xl ${
                    activePath === '/'
                      ? 'text-brand-blue  dark:text-brand-blue'
                      : null
                  }`}
                  onClick={() => setIsMenuExpanded(false)}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className='w-full text-center'>
              <Link href='/about'>
                <a
                  className={`inline-block my-2 p-2 text-gray-700 dark:text-gray-200 hover:bg-brand-blue hover:text-white dark:hover:bg-opacity-20 rounded w-full font-bold text-2xl ${
                    activePath === '/about'
                      ? 'text-brand-blue  dark:text-brand-blue'
                      : null
                  }`}
                  onClick={() => setIsMenuExpanded(false)}
                >
                  About
                </a>
              </Link>
            </li>
            <li className='w-full text-center'>
              <Link href='/blog'>
                <a
                  className={`inline-block my-2 p-2 text-gray-700 dark:text-gray-200 hover:bg-brand-blue hover:text-white dark:hover:bg-opacity-20 rounded w-full font-bold text-2xl ${
                    activePath === '/blog'
                      ? 'text-brand-blue  dark:text-brand-blue'
                      : null
                  }`}
                  onClick={() => setIsMenuExpanded(false)}
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
