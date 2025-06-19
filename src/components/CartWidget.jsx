import '../App.css'
import { BsFillCartFill } from "react-icons/bs";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <div className="carrito-div">
            <span className="carrito-icon"></span>
            <BsFillCartFill fontSize={"1.3rem"} />
            <span>{cartQuantity()}</span>
        </div>
    )
}

export default CartWidget;