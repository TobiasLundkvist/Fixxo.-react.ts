import React from 'react'
import { NavLink } from 'react-router-dom'

interface BreadcrumbProps {
  link: string;
  currentPage: string;
}

const BreadcrumbSection: React.FC<BreadcrumbProps> = ({link, currentPage}) => {
  return (
    <section className="breadcrumb">
      <div className='container'>
        <ul className="breadcrumb-list">
          <NavLink to={link} end><li><i className="fa-duotone fa-house"></i></li></NavLink>
          <NavLink to='/contacts'><li>{currentPage}</li></NavLink>
        </ul>
      </div>
    </section>
  )
}

export default BreadcrumbSection