import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {

    const{currency,delivery_fee,getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='text-2xl font-bold'>
        <p>Order summary</p>
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between '>
            <p className='text-gray-500'>Subtotal</p>
            <p className='font-bold'>{currency} {getCartAmount()}.00</p>
        </div>
        <div className='flex justify-between'>
            <p className='text-gray-500'>Delivery Fee</p>
            <p className='font-bold'>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between text-xl font-bold'>
            <p>Total</p>
            <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal