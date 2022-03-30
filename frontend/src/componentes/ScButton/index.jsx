import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import './styles.scss'

const ScrollButton = () => {
  const [visivel, setVisivel] = useState(false)

  const toggleVisivel = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      return setVisivel(true)
    }
    return setVisivel(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisivel)

  return (
    <button className='buttonToTop'>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visivel ? 'inline' : 'none' }}
      />
    </button>
  )
}

export default ScrollButton
