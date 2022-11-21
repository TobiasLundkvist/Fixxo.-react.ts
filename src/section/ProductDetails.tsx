import React, {useContext, useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { IProduct } from '../models/ProductModel';
import BreadcrumbSection from './BreadcrumbSection';


const ProductDetails = ({product, items}:any) => {

    const [count, setCount] = useState(0)

    function decrease() {
      setCount(prevCount => prevCount - 1)
    }
    function increase() {
      setCount(prevCount => prevCount + 1)
    }

  return (
    <>
    <div className='productDetails container'>
      <h3>Get 25% OFF at the Fixxo Selection - Shop Now!</h3>
      <BreadcrumbSection link="/" currentPage="| Product Signal" />
      <div className='detailsBody'>
        <div>
          <img src={product.imageName} alt={product.name} />
          <div className='smallImg'>
            <img src={product.imageName} alt={product.name} />
            <img src={product.imageName} alt={product.name} />
            <img src={product.imageName} alt={product.name} />
          </div>
        </div>
        <div className='details'>
          <h1>{product.name}</h1>
          <p className='artnumb'>SKU: 12345670 BRAND: The Northland</p>
          <div className='body-rating'>
            <i className="rating fa-solid fa-star"></i>
            <i className="rating fa-solid fa-star"></i>
            <i className="rating fa-solid fa-star"></i>
            <i className="rating fa-solid fa-star"></i>
            <i className="rating fa-solid fa-star"></i>
          </div>      
          <p className='price'>${product.price}</p> <br></br>
          <p className='productInfo'>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<a href='https://www.linkedin.com/in/tobias-lundkvist-289a59149/' target="_blank" rel="noreferrer">read more</a>)</p>
          <div className='selection'>
            <div>Size:</div>
            <form>
              <input type="radio" className="btn-check" name="options" id="option1"/>
              <label className="btn btn-secondary sizeBox" htmlFor="option1">S</label>
              <input type="radio" className="btn-check" name="options" id="option2"/>
              <label className="btn btn-secondary sizeBox" htmlFor="option2">M</label>
              <input type="radio" className="btn-check" name="options" id="option3"/>
              <label className="btn btn-secondary sizeBox" htmlFor="option3">L</label>
              <input type="radio" className="btn-check" name="options" id="option4"/>
              <label className="btn btn-secondary sizeBox" htmlFor="option4">X</label>
            </form>
          </div>
          <div className='selection'>
            <div className='color'>Color:</div>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue={"Choose an Option"}>Choose an Option</option>
              <option value="1">Blue</option>
              <option value="2">Red</option>
              <option value="3">Green</option>
              <option value="3">Yellow</option>
            </select>
          </div>
          <div className='selection'>
            <div>Qty:</div>
              <div className='counter'>
                <button className='count' onClick={decrease}>-</button>
                <span className='countNr'>{count}</span>
                <button className='count' onClick={increase}>+</button>
              </div>
              <button className='btn-red'>ADD TO CART</button>
          </div>
          <div className='selection'>
            <div>Share: </div>
            <div className='socialmedia'>
              <a href='https://facebook.com' target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f circle"></i></a>
              <a href='https://instagram.com' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram circle"></i></a>
              <a href='https://twitter.com' target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter circle"></i></a>
              <a href='https://google.se' target="_blank" rel="noreferrer"><i className="fa-brands fa-google circle"></i></a>
              <a href='https://linkedin.com' target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin circle"></i></a>
            </div>
          </div>
        </div>
      </div> 
      <div className='productDescription'>
        <h1><span>Description</span></h1>
        <h1>Additional</h1>
        <h1>Shopping & Returns</h1>
        <h1>Reviews</h1>
      </div>
      <div className='descriptionText'>
        <p>
          Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. 
        </p>
        <p>
          * Village did removed enjoyed explain nor ham saw calling talking. <br></br>
          * Securing as informed declared or margaret.<br></br>
          * Joy horrible moreover man feelings own shy.  
        </p> 
        <p>
          On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. 
        </p>
      </div>  
      <div>
        <h1 className='related'>Related Products</h1>
        <div className='relatedProducts'>
        {items.map((product:any) => <ProductCard key={product.articleNumber} product={product} />)}
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails