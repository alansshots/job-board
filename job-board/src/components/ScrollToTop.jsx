import React from 'react'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'react-feather'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
      if (window.scrollY > 280) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    
      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
    
        return () => {
          window.removeEventListener('scroll', toggleVisibility)
        }
      }, [])

  return (
  <div className='flex flex-row justify-end items-end max-w-6xl m-auto'>
    {isVisible === true && (
        <div
        onClick={scrollToTop}
        className='cursor-pointer transition-opacity duration-300 opacity-100 fixed bottom-4 right-4 z-10 rounded-full w-16 py-3 flex flex-row justify-center items-center bg-[#0852bf] text-white mr-2'>
            <ArrowUp className='w-10 h-10'/>
        </div>
    )}
  </div>
  )
}

export default ScrollToTop