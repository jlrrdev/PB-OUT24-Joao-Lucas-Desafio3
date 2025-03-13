import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`}>
      <div className='clothing-card'>
        <img className='clothesimg' src={image[0]} alt="" />
        <div className="info">
          <p>{name}</p>
        </div>
        <div className="price">
          <p>{currency}{price}</p>
        </div>
      </div>
    </Link>
    
  )
}

export default ProductItem
