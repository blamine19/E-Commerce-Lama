import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'

const Card = ({ item, id }) => {

  const baseUrl = import.meta.env.VITE_API_URL


  return (

    <Link to={`/product/${id}`}>
      <div className='card'>

        <div className='image'>
          {item.isNew && <span>New Season</span>}
          <img src={baseUrl + item.img?.data?.attributes.url} alt="" width="300" className='mainImg' />
          <img src={baseUrl + item.img2?.data?.attributes.url} alt="" width="300" className='secondImg' />
        </div>

        <div className="bottomCard">
          <div className='title'>
            {item.title}
          </div>

          <div className="prices"  >
            <div className='oldPrice'>
              {item.oldPrice} DA
            </div>
            <div className='price'>
              {item.price} DA
            </div>
            <div className="price">&nbsp;</div>
          </div>
        </div>
      </div>
    </Link>


  )
}

export default Card