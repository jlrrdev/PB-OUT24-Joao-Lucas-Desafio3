import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`}>
      <div className='clothing-card transition delay-100 duration-150 ease-in-out hover:scale-105'>
        <img className='clothesimg rounded-xl mb-2' src={image[0]} alt="" />
        <div className="info font-bold w-full">
          <p className='w-full'>{name}</p>
        </div>
        <div className='flex items-center gap-1 mt-1'>
          <img src={assets.star_icon} alt="" className="w-3 lg:w-5" />
          <img src={assets.star_icon} alt="" className="w-3 lg:w-5" />
          <img src={assets.star_icon} alt="" className="w-3 lg:w-5" />
          <img src={assets.star_icon} alt="" className="w-3 lg:w-5" />
          <p className='pl-1 sm:pl-2'>4/5</p>
        </div>
        <div className="price font-bold text-2xl">
          <p>{currency}{price}</p>
        </div>
      </div>
    </Link>
    
  )
}

export default ProductItem
