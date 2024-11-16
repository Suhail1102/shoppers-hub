import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../components/ProductData'



const initialState = {
   cart:[],
  items: products,
  totalQuantity: 0,
  totalPrice: 0
  }

  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
   addToCart :(state, action)=>{
    const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
   },

   incQuantity:(state, action)=>{
    const item = state.cart.find(item => item.id === action.payload);
    if(item){
      item.quantity += 1;
      state.totalQuantity += 1;
    }
   
   },

    decQuantity:(state, action)=>{
      const item = state.cart.find(item => item.id === action.payload);
      if(item.quantity>1){
        item.quantity -= 1;
        state.totalQuantity -= 1;
      }
      else if(item.quantity<=1){
         const newItem= state.cart.filter((cart)=> cart!==item)
         state.cart= newItem
         state.totalQuantity -= 1;
      }
    },

    removeItem:(state, action)=>{
      const item = state.cart.find(item => item.id === action.payload);
      const newItem= state.cart.filter((cart)=> cart!==item)
      state.cart= newItem;
      state.totalQuantity -= item.quantity;
    }
    
    }
  })

 export const {addToCart , incQuantity, decQuantity, removeItem} = cartSlice.actions
  export default cartSlice.reducer