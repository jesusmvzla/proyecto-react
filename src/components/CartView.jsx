import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const CartView = () => {
    const { cart, cartTotal, clear, removeItem } = useContext(CartContext)

    return (
        <div>
            <h2>Tu carrito</h2>

            {
                cart.map((compra) => (
                    <div key={compra.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <img src={compra.img} alt={compra.name} style={{ width: "10rem" }} />
                        <span>{compra.name}</span>
                        <span>${compra.price},00</span>
                        <span>{compra.quantity}</span>
                        <span> precio final: ${compra.price * compra.quantity},00</span>
                        <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>X</button>
                    </div>
                ))
            }

            <div>
                <span>
                    Total a pagar: ${cartTotal()},00
                </span>
            </div>

            <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button className='btn btn-danger' onClick={()=> confirmarVaciarCarrito()}>Vaciar carrito</button>
                <Link to="/checkout" className='btn btn-dark'>Terminar compra</Link>
            </div>
        </div>
    )
}

const confirmarVaciarCarrito = () => {
    toast((t) => (
        <div>
            <p>¿Seguro que deseas vaciar el carrito?</p>
            <button
                onClick={() => toast.dismiss(t.id)}
                style={{ marginRight: '8px' }}
            >
                Cancelar
            </button>
            <button
                onClick={() => {
                    clear();
                    toast.dismiss(t.id);
                    toast.success('Carrito vaciado');
                }}
                style={{ background: 'red', color: 'white' }}
            >
                Confirmar
            </button>
        </div>
    ));
};

export default CartView