import React from 'react'
import "./Cart.scss"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {

  const products = useSelector((state) => state.cart.products)

  const dispatch = useDispatch()


  const totalPrice = () => {
    let total = 0

    products.forEach(item => {
      total += item.price * item.quantity
    })

    return (total.toFixed(2));
  }


  const baseUrl = import.meta.env.VITE_API_URL



  return (

    <div className='cart'>

      <h2 style={{ paddingLeft: '5px' }}>&nbsp;Products in your Cart</h2>
      {
        products?.map((item) => (
          <div className="productsCart" key={item.id}>
            <div className="productCart">
              <div className="imgProductCart">
                <img src={baseUrl + item?.img} alt="" />
              </div>

              <div className="infsProductCart">
                <div className="titleInfsProductCart">{item.title}</div>
                <div className="descInfsProductCart" >{item.description}</div>
                <div className="priceInfsProductCart">
                  <span style={{flex: '1'}}>{item.quantity} x {item.price}</span>
                  <span style={{flex: '2', color: 'rgb(45, 122, 223)'}}>SUB-TOTAL : {item.quantity * item.price}</span>
                </div>
              </div>

              <div className="deleteIcon">
                <DeleteOutlineOutlinedIcon style={{ color: 'red' }}
                  onClick={() => dispatch(removeItem(item.id))} />
              </div>
            </div>
          </div>
        ))
      }


      <div className="infsCart">
        <div className="totalInfsCart">
          <div>TOTAL</div>
          <div>{totalPrice()}</div>
        </div>
        <div className="proceceedInfsCart">
          <div>  <Button variant="contained" size='small'>&nbsp;&nbsp;&nbsp;&nbsp;Proceceed to Checkout&nbsp;&nbsp;&nbsp;&nbsp;</Button></div>
        </div>
        <div className="resetInfsCart" onClick={() => (
          dispatch(resetCart())
        )} >
          <div>Reset Cart</div>
        </div>

      </div>

    </div>

  )
}

export default Cart