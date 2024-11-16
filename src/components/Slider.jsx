import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'



function Slider() {
  return (
    <>
     <Carousel className=' mt-3 text-dark'>
      <Carousel.Item className='slider'>
        <img src={img1} alt="" style={{width:"100%", height:"100%", objectFit:"fit"}}/>
      </Carousel.Item>
      <Carousel.Item className='slider'>
      <img src={img2} alt="" style={{width:"100%", height:"100%"}} />
      </Carousel.Item>
      <Carousel.Item className='slider' >
      <img src={img3} alt="" style={{width:"100%", height:"100%"}} />
      </Carousel.Item>
      <Carousel.Item className='slider' >
      <img src={img4} alt="" style={{width:"100%", height:"100%"}} />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider