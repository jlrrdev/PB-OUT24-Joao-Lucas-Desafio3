import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import { NavLink } from 'react-router-dom';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{

        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0,4))

    },[])

  return (

    <section class="clothes-section">
        <div className= 'mobile-nowrap wrapper'>

            <h2 class="darkheader">TOP SELLING</h2>

            {/* Rendering Products */}

        <div className='clothes-cards'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>

        <NavLink to='/collection' className="btn light">
              
            <p id="firstbtn">View All</p>

        </NavLink>

    </div>
    </section>
  )
}

export default BestSeller