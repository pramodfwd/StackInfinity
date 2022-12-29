
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getProductsSelector } from './ProductsSlice'

interface ProducListProps {

}

const ProducList: React.FC<ProducListProps> = ({ }: ProducListProps) => {

    const products = useSelector(getProductsSelector) // stock product 

    return (
        <div>
            <h2>Product List</h2><br />
            <table className='table table-stripe'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Title</th>
                        <th>Product Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((product) => (   
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProducList