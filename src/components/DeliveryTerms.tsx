import React from 'react'
import DeliveryTruck from '../assets/images/delivery-truck.svg'

const DeliveryTerms: React.FC = () => {
  return (
    <div className='terms'>
        <div className='circle'>
            <div>
                <img src={DeliveryTruck} alt="Customer Service" />
            </div>
        </div>
        <h4>Free Home Delivery</h4>
        <p>Village did removed enjoyed explain talking.</p>
    </div>
  )
}

export default DeliveryTerms