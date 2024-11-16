import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    totalQuantity:0,
    totalPrice:0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const newItem = action.payload;
            const itemIndex = state.products.findIndex((item) => item.id === newItem.id);
            if (itemIndex >=0) {
                state.products[itemIndex].quantity++;
                state.products[itemIndex].total+=newItem.price;
                
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
            console.log(state.totalPrice,state.products);
            

        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer