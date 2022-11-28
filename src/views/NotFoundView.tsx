import React from 'react'
import NavbarSection from '../section/NavbarSection'
import errorPage from '../assets/images/404-error-page.jpg'

const NotFoundView: React.FC = () => {
  return (
    <>
      <NavbarSection />
      <div className='errorPage container'>
        <img src={errorPage} alt='errorPage' />
      </div>
    </>
  )
}

export default NotFoundView