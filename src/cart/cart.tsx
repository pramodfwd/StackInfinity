import { useAppDispatch, useAppSelector } from "../store.hooks";
import { getCartProduct, getProductPrice, removeCartProduct } from "./CartSlice";

const CartPrice: React.FC = () => {

    const cartProducts = useAppSelector(getCartProduct)

    const totalPrice = useAppSelector(getProductPrice)

    const dispatch = useAppDispatch()

    const removeCartHandler = (id:number) => dispatch(removeCartProduct(id))

    return (
        <div>
            <h3>cart</h3>
            <h5>{totalPrice}</h5>
            <table className="table table-stripe">
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
                cartProducts.map(product=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.amount}</td>
                        <button onClick={()=>removeCartHandler(product.id)}>Remove from cart</button>
                    </tr>
                ))
            }
                </tbody>
            </table>
            
        </div>
    )
}

export default CartPrice;
