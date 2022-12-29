import React from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../store.hooks'
import { addProduct, Product } from './ProductsSlice'

//addProduct new product add hoga isem
//product old product

const ProductForm: React.FC = () => {

    const dispatch = useAppDispatch()


    // doughted line
    const [data, setdata] = useState<Product>({
        id: 0,
        title: '',
        price: 0
    })

    // doughted line 
    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setdata(prev => {
            (prev as any)[name] = value;
            const newvalue = { ...prev };
            return newvalue
        })
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addProduct(data))
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <h2>Add Product to store</h2><br />
                <input type="text" placeholder='Enter your Id' name='id' value={data.id} onChange={handleChange} />
                <input type="text" placeholder='Enter Post here' name='title' value={data.title} onChange={handleChange} />
                <input type="text" placeholder='Enter Price here' name='price' value={data.price} onChange={handleChange} />
                <button type='submit'>Add Position</button>
            </form>
        </>
    )
}

export default ProductForm
