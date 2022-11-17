import React from 'react'
import winterClearance from '../assets/images/winter-clearance-image.svg'
import newArrivals from '../assets/images/new-arrivals-image.svg'

const NewArrivalsSection: React.FC = () => {
  return (
    <section>
        <div className="webshop-info">
            <div className="container">
                <div className="webshop-info-body">
                    <div className="webshop-info-body-1">
                        <img src={winterClearance} alt="winter clearance"/>
                        <h1><span>Winter Clearance</span>Up to 70% Off!</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                        <button className='btn-black'>
                            <div className="corner-top-left"></div>
                            <div className="corner-bottom-right"></div>
                            SHOP NOW
                        </button>   
                    </div>
                    <div className="webshop-info-body-2">
                        <img src={newArrivals} alt="new arrivals"/>
                        <h1><span>New</span>Arrivals</h1>
                        <button className='btn-black'>
                            <div className="corner-top-left"></div>
                            <div className="corner-bottom-right"></div>
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewArrivalsSection