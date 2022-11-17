import React from 'react'
import CreditCard from '../assets/images/credit-card.svg'

const SecuredTerms: React.FC = () => {
  return (
    <div className='terms'>
      <div className='circle'>
        <div>
          <img src={CreditCard} alt="Customer Service" />
        </div>
      </div>
      <h4>Secured Payment</h4>
      <p>Village did removed enjoyed explain talking.</p>
    </div>
  )
}

export default SecuredTerms