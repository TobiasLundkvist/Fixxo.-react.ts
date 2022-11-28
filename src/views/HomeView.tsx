import React, { useEffect } from 'react'
import CollabsSection from '../section/CollabsSection'
import FooterSection from '../section/FooterSection'
import NavbarSection from '../section/NavbarSection'
import NewArrivalsSection from '../section/NewArrivalsSection'
import ProductGridSection from '../section/ProductGridSection'
import ShopTermsSection from '../section/ShopTermsSection'
import ShowcaseSection from '../section/ShowcaseSection'
import SpecialitySection from '../section/SpecialitySection'
import TwoForSection from '../section/TwoForSection'
import RankingProducts from '../section/RankingProducts'
import { ProductContextType, useProductContext } from '../contexts/productContext'


const HomeView: React.FC = () => {
  const {featured, getFeatured} = useProductContext() as ProductContextType;
  
  useEffect(() => {
    getFeatured()
  }, [])

  return (
    <>
    <div className='gradient-gray'>
      <NavbarSection />
    </div>
      <ShowcaseSection />
      <NewArrivalsSection />
      <ProductGridSection items={featured}/>
      <CollabsSection />
      <SpecialitySection />
      <TwoForSection />
      <RankingProducts />
      <ShopTermsSection />
      <FooterSection /> 
    </>
  )
}

export default HomeView