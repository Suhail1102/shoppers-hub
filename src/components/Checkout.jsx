import React from 'react'
import  Lottie  from 'lottie-react';
import order from '../Lotties/order.json'
import { Button } from 'react-bootstrap';


function Checkout() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"100vh"}}>
     <Lottie  animationData={order}   loop={true} width={500} height={500} />
      <Button variant='outline-secondary'> <a href="/" className='check' style={{textDecoration:"none"}}>Go To Home</a></Button>
    </div>
  )
}

export default Checkout