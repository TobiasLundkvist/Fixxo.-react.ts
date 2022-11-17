import React from 'react'
import BreadcrumbSection from '../section/BreadcrumbSection'
import ContactFormsSection from '../section/ContactFormsSection'
import MapSection from '../section/MapSection'
import NavbarSection from '../section/NavbarSection'

const ContactView: React.FC = () => {
  return (
    <>
      <NavbarSection />
      <BreadcrumbSection link='/' currentPage=' Contacts'/>
      <MapSection />
      <ContactFormsSection />
    </>

  )
}

export default ContactView