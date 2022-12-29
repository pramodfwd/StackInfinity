import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface Product {
    id:number;
    title:string;
    price:number;
}
const initialState: Product[] = [
    {id: 1,title: "Front End Developer",price: 600,},
    {id: 2,title: "Back End Developer",price: 800,},
    {id: 3,title: "Marketing Department",price: 300,}
]

const productSlice =  createSlice ({
    name:"products",
    initialState,
    reducers: {
        addProduct: (state, action:PayloadAction<Product>) => {
            return [...state,action.payload]
        }
    }
})
export const {addProduct} = productSlice.actions;

export const getProductsSelector = (state: RootState) => state.Products;

export default productSlice.reducer

