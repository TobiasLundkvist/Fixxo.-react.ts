import React from 'react'
import CreateProduct from '../components/CreateProduct'
import ManageProductList from '../components/ManageProductList'
import FooterSection from '../section/FooterSection'
import NavbarSection from '../section/NavbarSection'

const ManageProductView: React.FC = () => {


  return (
    <> 
        <NavbarSection />
        <CreateProduct />
        <hr className='my-5'/>
        <ManageProductList />
        <FooterSection />

    </>
  )
}

export default ManageProductView