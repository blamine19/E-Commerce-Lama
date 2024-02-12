import React, { useState } from 'react'
import './Product.scss'
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartReducer";

const Product = () => {


  // get id from url
  const id = useParams().id

  // request :
  const { data, loading, error } = useFetch(`/api/products/${id}?populate=*`)

  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(1)


  const dispatch = useDispatch()


  const baseUrl = import.meta.env.VITE_API_URL


  return (
    <div className='product'>
      <div className="left">

        <div className="images">
          <img src={baseUrl + data?.attributes?.img?.data?.attributes?.url} alt=""
            onClick={e => setSelectedImg("img")} />
          <img src={baseUrl + data?.attributes?.img2?.data?.attributes?.url} alt=""
            onClick={e => setSelectedImg("img2")} />

        </div>

        <div className="mainImg">
          <img src={baseUrl + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
        </div>

      </div>

      <div className="right">
        <div className="subRight"><h1 style={{ margin: '0px' }}>{data?.attributes?.title}</h1></div>
        <div className="subRight"><h2 >{data?.attributes?.price}</h2></div>
        <div className="subRight"><p style={{ marginTop: '0px' }}>{data?.attributes?.description}</p></div>

        <div className="subRight" style={{ marginTop: '15px' }}>
          <Button variant="contained" style={{ background: 'rgb(206, 205, 205)', fontWeight: 'bold', color: 'black' }}
            onClick={e => setQuantity(quantity => quantity === 1 ? quantity : quantity - 1)}>-</Button>

          &nbsp;<span style={{ fontSize: '19px', margin: '5px', fontWeight: 'bold' }}>{quantity}</span>&nbsp;

          <Button variant="contained" style={{ background: 'rgb(206, 205, 205)', fontWeight: 'bold', color: 'black' }}

            onClick={() =>
              setQuantity((prev) => (prev + 1))
            }>+</Button>
        </div>

        <div className="subRight" style={{ marginTop: '25px' }}>
          <Button variant="contained" style={{ fontSize: '15px' }} startIcon={<LocalGroceryStoreIcon />}
            onClick={
              () => dispatch(
                addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  description: data.attributes.description,
                  price: data.attributes.price,
                  img: data.attributes.img.data.attributes.url,
                  quantity,
                })
              )
            }>
            &nbsp;&nbsp;&nbsp;ADD TO CART &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          </Button>


        </div>
        <div className="subRight" style={{ marginTop: '15px' }}>
          <Button variant="text" style={{ fontSize: '15px' }} startIcon={<FavoriteIcon />}>
            ADD TO WISH LIST
          </Button>

          <Button variant="text" style={{ fontSize: '15px' }} startIcon={<BalanceIcon />}>
            ADD TO COMPARE
          </Button>
        </div>

        <hr className="line" />

        <div className="subRight2" >
          <div className="lineSubRight">A long-sleeve T-shirt is a type of casual shirt with sleeves that extend to cover the arms fully.
            Similar to a traditional T-shirt, it typically features a round neckline and a comfortable, relaxed fit.
            The distinguishing feature is the long sleeves.</div>
          <div className="lineSubRight">A long-sleeve T-shirt is a type of casual shirt with sleeves that extend to cover the arms fully.
            Similar to a traditional T-shirt, it typically features a round neckline and a comfortable, relaxed fit.
            The distinguishing feature is the long sleeves.</div>
          <div className="lineSubRight">A long-sleeve T-shirt is a type of casual shirt with sleeves that extend to cover the arms fully.
            Similar to a traditional T-shirt, it typically features a round neckline and a comfortable, relaxed fit.
            The distinguishing feature is the long sleeves.</div>
          <div className="lineSubRight">&nbsp;</div>
        </div>

        <hr className="line" />

        <div className="subRight2">
          <div className="lineSubRight">A long-sleeve T-shirt is a type of casual shirt with sleeves that extend to cover the arms fully.
            Similar to a traditional T-shirt, it typically features a round neckline and a comfortable, relaxed fit.
            The distinguishing feature is the long sleeves.</div>
          <div className="lineSubRight">A long-sleeve T-shirt is a type of casual shirt with sleeves that extend to cover the arms fully.
            Similar to a traditional T-shirt, it typically features a round neckline and a comfortable, relaxed fit.
            The distinguishing feature is the long sleeves.</div>
          <div className="lineSubRight">A long-sleeve T-shirt is a type of casual shirt with sleeves that extend to cover the arms fully.
            Similar to a traditional T-shirt, it typically features a round neckline and a comfortable, relaxed fit.
            The distinguishing feature is the long sleeves.</div>
        </div>

        <hr className="line" />


        <div className="subRight2">
          <div className="lineSubRight">A long-sleeve T-shirt is a type of casual shirt with sleeves that extend to cover the arms fully.
            Similar to a traditional T-shirt, it typically features a round neckline and a comfortable, relaxed fit.
            The distinguishing feature is the long sleeves.</div>
          <div className="lineSubRight">A long-sleeve T-shirt is a type of casual shirt with sleeves that extend to cover the arms fully.
            Similar to a traditional T-shirt, it typically features a round neckline and a comfortable, relaxed fit.
            The distinguishing feature is the long sleeves.</div>
          <div className="lineSubRight">A long-sleeve T-shirt is a type of casual shirt with sleeves that extend to cover the arms fully.
            Similar to a traditional T-shirt, it typically features a round neckline and a comfortable, relaxed fit.
            The distinguishing feature is the long sleeves.</div>
        </div>

      </div>

    </div>
  )
}

export default Product