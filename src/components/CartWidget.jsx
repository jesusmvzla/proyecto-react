import '../App.css'
import { BsFillCartFill } from "react-icons/bs";


const CartWidget = () => {
    return (
<div className="carrito-div">
    <span className="carrito-icon"></span>
    <BsFillCartFill fontSize={"1.3rem"} />
    <span>8</span>
</div>
    )
}

export default CartWidget;