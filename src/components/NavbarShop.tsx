import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavbarShopProps {
  link: string;
  icon: string;
  badge?: number;
}


const NavbarShop = ({link, icon, badge}: NavbarShopProps ) => {
  return (
    <div className='whiteCircle'>
      <NavLink className='navbarShop' to={link}>
        <i className={icon}></i>
        <span className="badge rounded-pill">{badge}</span>
      </NavLink>
    </div>

  )
}

export default NavbarShop