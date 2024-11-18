import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const newItem = action.payload;
            const itemIndex = state.products.findIndex((item) => item.id === newItem.id);
            if (itemIndex >= 0) {
                state.products[itemIndex].quantity++;
                state.products[itemIndex].total += newItem.price;

            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    quantity: 1,
                    total: newItem.price,
                    price: newItem.price
                })
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;



        },
        removeFromCart: (state, action) => {
            const Id = action.payload;
            const item = state.products.find(product => product.id === Id)
       
            if (item) {
                state.totalPrice-=item.total;
                state.totalQuantity-=item.quantity;
                state.products= state.products.filter((product)=> product.id !== Id)
            }
        },
        increaseQuantity:(state,action)=>{
            const Id = action.payload;
            const item = state.products.find(product => product.id === Id)
            if(item){
                state.totalQuantity++;
                state.totalPrice+=item.price;
                item.quantity++;
                item.total+=item.price;
            }
        },
        decreaseQuantity:(state,action)=>{
            const Id = action.payload;
            const item = state.products.find(product => product.id === Id)
            if(item){
                state.totalQuantity--;
                state.totalPrice-=item.price;
                item.quantity--;
                item.total -=item.price;
            }
        }
           
           
           
           



    }
})
export const { addToCart, removeFromCart,increaseQuantity ,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer