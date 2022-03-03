 import React from 'react'
 import "./Home.css"
import Product from './Product'
import Booklover2 from './Images/Booklover2.gif'
 
 function Home() {
   return (
     <div className='home'>
       {/* <div className="home__container">
           <img className='home__image'  src='https://m.media-amazon.com/images/I/713ezibaREL._SX3740_.jpg'
               alt=''
           />
          <div className="home__row">
           <Product />
           <Product />
           
          </div>
          <div className="home__row">
          <Product />
          <Product />
          <Product />
          </div>
          <div className="home__row">
          <Product />
          </div>
       </div> */}
       <div className="home__container">
         <div className="leftPartDescription">
           <h2>Welcome to Pushtak Store📚</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum pariatur cum. Doloremque fugiat perspiciatis rerum cupiditate, dolorem veritatis aliquam praesentium velit eius voluptatum laudantium nulla, minima facilis optio blanditiis?</p>
           <button className='button'><span>Sign Up </span></button>
         </div>
         <div className="rightPartVector">
           <img src={Booklover2} alt="" />
         </div>
       </div>
       <div className="main__content">
         <Product />
         <Product />
         <Product />
       </div>
     </div>
   )
 }
 
 export default Home
 