import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({ type }) => {

  const { data, loading, error } = useFetch(`/api/products?populate=*&filters[type][$eq]=${type}`)

  
  return (

    <div className="feauturedProducts">
      <div className='containerFeauturedProducts'>

        <div className="top">
          <h1>{type} Products</h1>
          <p style={{ paddingTop: '55px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas.
          </p>
        </div>

        <div className="bottomfeauturedProducts">
          {

            error ?
              "Something went wrong !" :
              loading ?
                "loading" :
                data?.map(item => (
                  <div className='product'>
                    <Card item={item.attributes} key={item.id} id={item.id}/>
                  </div>
                ))
          }
        </div>

      </div>

    </div>


  )
}

export default FeaturedProducts