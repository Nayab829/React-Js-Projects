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
            const itemIndex = state.products.find((item) => item.id === newItem.id);
            if (itemIndex) {
                newItem.quantity++;
                itemIndex.totalPrice += newItem.price;
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    quantity: 1,
                    totalPrice: newItem.price,
                    price: newItem.price
                })
            }
            state.totalPrice += newItem.totalPrice;
            state.totalQuantity++;


        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer