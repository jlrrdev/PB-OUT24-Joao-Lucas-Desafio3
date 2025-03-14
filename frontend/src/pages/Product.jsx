import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(()=>{
    fetchProductData();
  },[productId, products])

  return productData ?(
    <div className='border-t-2 pt-20 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      {/* Product data */}
      
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-3xl' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto rounded-2xl' src={image} alt="" />
          </div>
        </div>

            {/* Product Info */}

            <div className='flex-1'>
              <h1 className='text-left text-4xl mt-2 darkheader'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-5" />
                <img src={assets.star_icon} alt="" className="w-5" />
                <img src={assets.star_icon} alt="" className="w-5" />
                <img src={assets.star_icon} alt="" className="w-5" />
                <p className='pl-2'>4/5</p>
              </div>
              <p className='mt-5 text-3xl font-bold'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p className='text-gray-700'>Choose Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`text-gray-700 rounded-3xl border py-2 px-4 bg-gray-100 ${item === size ? 'border-black' : ''}`} key={index}>{item}</button>
                  ))}
                </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 w-80 py-3 text-sm active:bg-gray-700 rounded-3xl'>Add to Cart</button>
              <hr className='mt-8 sm:w-4/5' />
            </div>
      </div>

      {/* Description & Review Section */}

      <div className='mt-20'>
        <div className='flex items-center justify-evenly'>
          <b className='border-b-2 border-black px-5 py-3 text-sm'>Product Details</b>
          <p className='border-b px-5 py-3 text-sm'>Rating & Reviews</p>
          <p className='border-b px-5 py-3 text-sm'>FAQs</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      {/* Display Related Products */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
