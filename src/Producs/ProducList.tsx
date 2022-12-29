
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addCartProduct } from '../cart/CartSlice'
import { useAppDispatch } from '../store.hooks'
import { getProductsSelector, Product, removeProduct } from './ProductsSlice'


interface ProducListProps {

}

const ProducList: React.FC<ProducListProps> = ({ }: ProducListProps) => {

    const products = useSelector(getProductsSelector) // stock product  doughted line 

    const dispatch = useAppDispatch()    //doughted line

    const deletehandler = (id:number) => { dispatch(removeProduct(id)) }

    const addToCardHandler = (product:Product) => { dispatch(addCartProduct(product)) }

    return (
        <div>
            <h3>Product List</h3><br />
            <table className='table table-stripe'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Title</th>
                        <th>Product Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((product) => (   
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={()=>addToCardHandler(product)}>Add to cart</button>
                                </td>
                                <td>
                                    <button onClick={()=>deletehandler(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}



export default ProducList