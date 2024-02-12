import React from 'react'
import "./Footer.scss"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className='footer'>

      <div className="footerElement">
        <span><b>Categories</b></span>
        <div className="item"><Link className="link" to="/products/1">Woman</Link></div>
        <div className="item"><Link className="link" to="/products/1">Men</Link></div>
        <div className="item"><Link className="link" to="/products/1">Shoes</Link></div>
        <div className="item"><Link className="link" to="/products/1">Accesoires</Link></div>
        <div className="item"><Link className="link" to="/products/1">New Arrivals</Link></div>
      </div>

      <div className="footerElement">
        <span><b>Links</b></span>
        <div className="item"><Link className="link" to="/products/1">Woman</Link></div>
        <div className="item"><Link className="link" to="/products/1">Men</Link></div>
        <div className="item"><Link className="link" to="/products/1">Shoes</Link></div>
        <div className="item"><Link className="link" to="/products/1">Accesoires</Link></div>
        <div className="item"><Link className="link" to="/products/1">New Arrivals</Link></div>
      </div>

      <div className="footerElement">
        <span><b>About</b></span>
        <div className="item">This is a very basic example, and a real eCommerce website would require a more sophisticated structure,
          interactivity through JavaScript, and server-side logic for handling products, user accounts, and transactions.
          If you are planning to build a fully functional eCommerce website, it's recommended to use a dedicated eCommerce platform
          or framework to handle these complexities.</div>
      </div>

      <div className="footerElement">
        <span><b>Cantact</b></span>
        <div className="item">This example includes a contact form with fields for name, email, and a message. Adjustments can be made
          to suit the specific needs and styling preferences of your website.</div>
      </div>


      <div className="footerElement span-two">
        <span style={{fontSize: '15px', fontWeight: 'bold', color: 'rgb(77, 75, 91)'}}>All rights reserved - 2024</span>
      </div>

      <div className="footerElement span-two">       
          <img src='./public/img/pay.PNG' alt='' />        
      </div>



    </div>
  )
}

export default Footer