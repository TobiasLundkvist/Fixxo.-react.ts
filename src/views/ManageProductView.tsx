import React from 'react'
import CreateProduct from '../components/CreateProduct'
import UserList from '../components/UserList'
import FooterSection from '../section/FooterSection'
import NavbarSection from '../section/NavbarSection'

const ManageProductView: React.FC = () => {


  return (
    <> 
        <NavbarSection />
        <CreateProduct />
        <hr className='my-5'/>
        <UserList />
        <FooterSection />

    </>
  )
}

export default ManageProductView