import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Producs/ProductsSlice";
import { RootState } from "../store";


interface cartProduct extends Product {
    amount: number;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: [] as cartProduct[],   //dougted line 
    reducers: {
        addCartProduct: (state, action: PayloadAction<Product>) => {

            const productIndex = state.findIndex(product => product.id === action.payload.id)
            console.log(productIndex)
            if (productIndex !== -1) {
                state[productIndex].amount += 1;
            } else {
                state.push({ ...action.payload, amount: 1 })
            }
        },

        removeCartProduct: (state, action: PayloadAction<number>) => {
            const productIndex = state.findIndex(product => product.id === action.payload)

            if (state[productIndex].amount > 1) {
                state[productIndex].amount -= 1;
            } else {
                return state.filter(product => product.id !== action.payload)
            }
        }
    }
})

export const getCartProduct = (state:RootState) => state.cart

export const getProductPrice = (state:RootState) => state.cart.reduce((acc,next)=> acc += (next.amount * next.price) ,0 )


export const {addCartProduct,removeCartProduct} = cartSlice.actions;

export default cartSlice.reducer;