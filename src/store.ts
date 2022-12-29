import {configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import Products from './Producs/ProductsSlice';
import cart from './cart/CartSlice'


const store = configureStore ({
    reducer: {
        Products,
        cart
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;