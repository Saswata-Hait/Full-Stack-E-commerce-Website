import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
       </div>
       <div className="descriptionbox-description">
        <p>
        Welcome to the Forever Shopper, your one-stop destination for top-quality
        products at unbeatable prices! We specialize in offering a wide range of items,
        from the latest tech gadgets and stylish fashion to home essentials and unique 
        gifts, all carefully curated to meet your needs. With fast shipping, secure payments, and exceptional customer service, shopping with us is easy, convenient, and enjoyable. Explore our collection today and discover something special for you or your loved ones!
        </p>
        <p>
        Our customers love shopping with us, and their reviews say it all!
         From rave feedback about our fast shipping and responsive customer 
         support to praise for the quality and variety of our products, 
         we’re proud to deliver an exceptional shopping experience. 
         Don’t just take our word for it—check out what our satisfied customers 
         have to say and see why so many choose us for their online shopping needs. 
         Your satisfaction is our top priority!
        </p>
       </div>
    </div>
  )
}

export default DescriptionBox