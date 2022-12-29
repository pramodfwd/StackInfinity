import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import {AppDispatch, RootState} from './store'


export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector // state of reducer

export const useAppDispatch = () => useDispatch<AppDispatch>()  // dispatch function of store
