import React from 'react'
import CustomerService from '../assets/images/customer-service.svg'

const CustomerTerms: React.FC = () => {
  return (
    <div className='terms'>
      <div className='circle'>
        <div>
          <img src={CustomerService} alt="Customer Service" />
        </div>
      </div>
      <h4>Customer Support</h4>
      <p>Village did removed enjoyed explain talking.</p>
    </div>
  )
}

export default CustomerTerms