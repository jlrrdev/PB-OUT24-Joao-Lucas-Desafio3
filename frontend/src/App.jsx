import React from 'react'
import {Routes,Route} from 'react-router-dom' 
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import NewsletterBox from './components/NewsletterBox'
import { ToastContainer, toast } from 'react-toastify';
import NewsletterBar from './components/NewsletterBar'
import useSmoothScroll from './hooks/useSmoothScroll'

// CSS

import './styles/allpages/global.css'; 
import './styles/allpages/buttons.css'; 
import './styles/allpages/newsletter-bar.css'; 
import './styles/allpages/footer.css'; 

const App = () => {

  useSmoothScroll();

  return (
    <div id='top'>
      
      <ToastContainer/>
      <NewsletterBar/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      <NewsletterBox/>
      <Footer/>
      
    </div>
  )
}

export default App
