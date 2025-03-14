import React, { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod] = useState('mastercard');

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-22 sm:pt-14 min-h-[80vh] border-top px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      {/* Left Side */}

      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl mt-6 mb-3 font-bold'>

          <p>Delivery information</p>

        </div>

        <div className='flex gap-3'>

          <input className='border rounded-3xl border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='First name'/>
          <input className='border rounded-3xl border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='Last name'/>

        </div>

          <input className='border rounded-3xl border-gray-300 py-1.5 px-3.5 w-full' type="email" placeholder='Email Address'/>
          <input className='border rounded-3xl border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>

        <div className='flex gap-3'>

          <input className='border rounded-3xl border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input className='border rounded-3xl border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='State'/>

        </div>

        <div className='flex gap-3'>

          <input className='border rounded-3xl border-gray-300 py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode'/>
          <input className='border rounded-3xl border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>

        </div>

          <input className='border rounded-3xl border-gray-300 py-1.5 px-3.5 w-full' type="number" placeholder='Phone'/>

      </div>

        {/* Right Side */}
        <div className='mt-8'>

          <div className='mt-8 min-w-80'>
            <CartTotal/>
          </div>

          <div className='mt-12 font-bold'>

            <p className='mb-2'>Payment Method</p>

            {/* Payment Method Selection */}

            <div className='flex gap-3 flex-col xl:flex-row'>

              <div onClick={()=>setMethod('apple')} className='flex rounded-3xl items-center gap-3 border p-2 px-3 cursor-pointer'>

                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'apple' ? 'bg-black' : ''}`}></p>

                <img className='h-4 mx-4' src={assets.apple_logo} alt="" />

              </div>

              <div onClick={()=>setMethod('gpay')} className='flex rounded-3xl items-center gap-3 border p-2 px-3 cursor-pointer'>

                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'gpay' ? 'bg-black' : ''}`}></p>

                <img className='h-4 mx-4' src={assets.gpay_logo} alt="" />

              </div>

              <div onClick={()=>setMethod('mastercard')} className='flex rounded-3xl items-center gap-3 border p-2 px-3 cursor-pointer'>

                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'mastercard' ? 'bg-black' : ''}`}></p>

                <img className='h-4 mx-4' src={assets.mastercard_logo} alt="" />

              </div>

              <div onClick={()=>setMethod('paypal')} className='flex rounded-3xl items-center gap-3 border p-2 px-3 cursor-pointer'>

                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-black' : ''}`}></p>

                <img className='h-4 mx-4' src={assets.paypal_logo} alt="" />

              </div>

              <div onClick={()=>setMethod('visa')} className='flex rounded-3xl items-center gap-3 border p-2 px-3 cursor-pointer'>

                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'visa' ? 'bg-black' : ''}`}></p>

                <img className='h-4 mx-4' src={assets.visa_logo} alt="" />

              </div>

            </div>

            <div className='w-full text-end mt-8'>

              <button onClick={()=>navigate('/orders')} className='bg-black text-white w-full rounded-3xl text-sm px-8 py-3'>PLACE ORDER</button>

            </div>

          </div>

        </div>

    </div>
  )
}

export default PlaceOrder
