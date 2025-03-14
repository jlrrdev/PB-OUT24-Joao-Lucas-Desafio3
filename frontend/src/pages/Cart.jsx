import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);

  const [cartData,setCartData] = useState([]);

  useEffect(()=>{

    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  },[cartItems])

  return (
    <div className='border-t pt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <div className='text-2xl mb-3'>
        <p className='text-left mt-0 mb-4 darkheader'>Your cart</p>
      </div>

      <div>
        {
          cartData.map((item,index)=>{

            const productData = products.find((product)=> product._id === item._id);

            return(

              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20 rounded-xl' src={productData.image[0]} alt="" />
                  <div>
                    <p className='sm:text-lg font-bold text-3xl'>{productData.name}</p>
                    <div className='flex-row items-center gap-5'>
                      <p className='text-xl'>Size: {item.size}</p>
                      <p className='font-bold text-2xl mt-2'>{currency}{productData.price}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-row">
                  <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 ml-16 mb-10 sm:w-5 cursor-pointer justify-end' src={assets.bin_icon} alt="" />
                  <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border rounded-3xl bg-slate-50 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                </div>
              </div>

            )

          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white w-full rounded-3xl text-sm mt-8 px-8 py-3'>Go to checkout →</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
