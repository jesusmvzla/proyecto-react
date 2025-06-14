import React, { useContext } from 'react'
import CartView from './CartView'
import EmpyCart from './EmpyCart'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
            {cart.length ? <CartView /> : <EmpyCart />}
        </>
    )
}

export default Cart