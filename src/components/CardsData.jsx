
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { products } from './ProductData';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/CartSlice'
import { Snackbar, Alert } from '@mui/material';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Placeholder from 'react-bootstrap/Placeholder';




export default function CardsData() {
    const [open, setOpen] = useState(false);

    // Function to handle the button click
    const handleAddToCart = () => {
      setOpen(true); // Show the Snackbar when button is clicked
  
      // Hide Snackbar after 2 seconds
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    };
    
    const dispatch = useDispatch();

    const items= useSelector((state)=>state.allCarts.items);
    
    const truncateDescription = (description) => {
        return description.length > 80 ? description.substring(0, 90) + '...' : description;
    };


    const [isImageLoading, setIsImageLoading] = useState(true);

    const handleLoadStart = () => {
      setIsImageLoading(true);
    };
  
    const handleLoad = () => {
      setIsImageLoading(false);
    };
  return (
    <>
    { items.map((element , id)=>{
        return(
            <Card style={{ width: "22rem"} } key={id} className='mx-2 my-2 border-0 '>
            {/* <LazyLoadImage variant="top" src={element.thumbnail}  className='mt-2 shadow hover rounded ' alt='Loading..' onLoadStart={{background: "gray"}} style={{cursor: "pointer"}} 
            /> */}
            {isImageLoading && <Placeholder as={LazyLoadImage} animation="glow" style={{ height: "328px", width: "100%"}} />}
      
      <LazyLoadImage
        variant="top"
        src={element.thumbnail}
        className="mt-2 shadow hover rounded"
        alt={`Thumbnail of ${element.title}`}
        style={{ cursor: "pointer" }}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}  // Set isImageLoading to false once loading is complete
      />
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
              <Card.Text >
               {truncateDescription(element.description)}
              </Card.Text>
              <Card.Text  className='text-bold'>
               Price: <b>{element.price}</b> Rs.
              </Card.Text>
              <span onClick={()=>dispatch(addToCart(element))}> <Button variant='outline-secondary' onClick={handleAddToCart}>Add To Cart</Button></span>
             
            </Card.Body>
          </Card>
        )
    })}
     
     <Snackbar open={open} onClose={() => setOpen(false)}  anchorOrigin={{ vertical:"top", horizontal:'center' }}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '22rem' }}>
          Item added successfully!
        </Alert>
      </Snackbar>
    </>
  )
}
