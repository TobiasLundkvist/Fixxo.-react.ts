import React from 'react'
import PamelaImage from '../assets/images/pamela-reif-image.svg'

const CollabPamela: React.FC = () => {
  return (
    <div className='pamela'>
        <img src={PamelaImage} alt="Pamela Reif" className='pamela-img'/>
        <div>
            <h2><span>Pamela Reif's</span>Top Picks</h2>
            <button className='btn-black'>
                <div className='corner-top-left'></div>
                <div className='corner-bottom-right'></div>
                SHOP NOW
            </button>
        </div>
    </div>
  )
}

export default CollabPamela