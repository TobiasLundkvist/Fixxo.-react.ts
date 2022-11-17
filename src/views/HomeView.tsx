import React from 'react'
import CollabsSection from '../section/CollabsSection'
import FooterSection from '../section/FooterSection'
import NavbarSection from '../section/NavbarSection'
import NewArrivalsSection from '../section/NewArrivalsSection'
import ProductGridSection from '../section/ProductGridSection'
import ShopTermsSection from '../section/ShopTermsSection'
import ShowcaseSection from '../section/ShowcaseSection'
import SpecialitySection from '../section/SpecialitySection'


const HomeView: React.FC = () => {
  return (
    <>
      <div className='gradient-gray'>
      <NavbarSection />
      </div>
      <ShowcaseSection />
      <NewArrivalsSection />
      <ProductGridSection />
      <CollabsSection />
      <SpecialitySection />

      <ShopTermsSection />
      <FooterSection />
    </>
  )
}

export default HomeView