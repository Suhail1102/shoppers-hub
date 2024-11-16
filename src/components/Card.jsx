import {React, useState} from 'react'
import CardsData from './CardsData'

function Card() {
 
  return (
    <>
    <div className="container-fluid">
    <div className=" mt-3 d-flex row justify-content-center align-item-center ">
        <CardsData></CardsData>
        </div>
    </div>
    </>
  )
}

export default Card