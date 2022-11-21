import React, {useContext} from 'react'
import CollabsSection from '../section/CollabsSection'
import FooterSection from '../section/FooterSection'
import NavbarSection from '../section/NavbarSection'
import NewArrivalsSection from '../section/NewArrivalsSection'
import ProductGridSection from '../section/ProductGridSection'
import ShopTermsSection from '../section/ShopTermsSection'
import ShowcaseSection from '../section/ShowcaseSection'
import SpecialitySection from '../section/SpecialitySection'
import { FeaturedProductsContext, } from '../contexts/contexts'
import TwoForSection from '../section/TwoForSection'
import RankingProducts from '../section/RankingProducts'


const HomeView: React.FC = () => {

  const products = useContext(FeaturedProductsContext);

  return (
    <>
    <div className='gradient-gray'>
      <NavbarSection />
    </div>
      { products && <>
        <ShowcaseSection />
        <NewArrivalsSection />
        <ProductGridSection items={products}/>
        <CollabsSection />
        <SpecialitySection />
        <TwoForSection />
        <RankingProducts />
      </>}
      <ShopTermsSection />
      <FooterSection /> 
    </>
  )
}

export default HomeView