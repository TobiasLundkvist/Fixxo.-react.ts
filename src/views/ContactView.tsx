import React from 'react'
import BreadcrumbSection from '../section/BreadcrumbSection'
import MapSection from '../section/MapSection'
import NavbarSection from '../section/NavbarSection'

const ContactView: React.FC = () => {
  return (
    <>
      <NavbarSection />
      <BreadcrumbSection link='/' currentPage=' Contacts'/>
      <MapSection />
    </>

  )
}

export default ContactView