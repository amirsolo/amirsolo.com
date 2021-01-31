const Item = ({ title, children }) => {
  return (
    <div className='mb-5 ml-2 md:ml-3'>
      <div className='flex items-center mb-2 text-green-700 dark:text-green-300'>
        <span className='sr-only'>Item</span>
        <svg className='h-4 w-4 mr-2' viewBox='0 0 24 24'>
          <g
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
            <path d='M22 4L12 14.01l-3-3' />
          </g>
        </svg>
        <p className='text-lg font-medium text-gray-800 dark:text-gray-200'>
          {title}
        </p>
      </div>
      <p className='text-gray-700 dark:text-gray-400 ml-6'>{children}</p>
    </div>
  )
}

export default Item
