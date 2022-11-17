import React from 'react'
import LetsBeImage from '../assets/images/lets-be-conscious-image.svg'

const CollabLetsBe: React.FC = () => {
  return (
    <div className='letsbe'>
    <img src={LetsBeImage} alt="Let's Be Conscious" className='letsbe-img'/>
    <div>
        <h2><span>Let's Be</span>Conscious</h2>
        <button className='btn-white'>
            <div className='corner-top-left '></div>
            <div className='corner-bottom-right'></div>
            SHOP NOW
        </button>
    </div>
  </div>
  )
}

export default CollabLetsBe