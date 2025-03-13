import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

  const{products,currency} = useContext(ShopContext);

  return (
    <div className='border-t pt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <div className='text-2xl'>
        <p>My orders</p>
      </div>

      <div>
        
      </div>

    </div>
  )
}

export default Orders
