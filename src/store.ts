import {configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import Products from './Producs/ProductsSlice';

const store = configureStore ({
    reducer: {
        Products
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;