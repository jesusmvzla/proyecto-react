import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../service/firebase';

const Checkout = () => {

    const [buyer, setBuyer] = useState({})
    const [validateEmail, setValidateEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    const { cart, cartTotal, clear } = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )

    }

    const finalizarCompra = (e) => {
        //para que no recargue el formulario al darle submit
        e.preventDefault();

        if (!buyer.name || !buyer.telefono || !buyer.email) {
            alert("todos los campos son requeridos")

        } else if (buyer.email !== buyer.validateEmail) {
            alert("Los correos ingresados no coinciden")

        } else {

            let orden = {
                comprador: buyer,
                compras: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }

        }
        const ventas = collection(db, "orders")

        //agregar un doc a la collection orders

        addDoc(ventas, orden)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            {
                orderId
                    ?
                    <div>
                        <h2>¡Generaste correctamente tu orden!</h2>
                        <h2>El id es:{orderId}</h2>
                        <br></br>
                        <p>Nos comunicaremos a tu teléfono y correo para coordinar el envío o tu reserva</p>
                        <Link className='btn btn-dark' to="/"> Volver al inicio</Link>
                    </div>
                    : <div>
                        <h1>Completa tus datos</h1>
                        <form onSubmit={finalizarCompra}>
                            <input className="form-control" placeholder="Nombre completo" type="text" name="name" onChange={buyerData} />
                            <input className="form-control" placeholder="Teléfono de contacto" type="text" name="telefono" onChange={buyerData} />
                            <input className="form-control" placeholder="Correo electrónico" type="email" name="email" onChange={buyerData} />
                            <input className="form-control" placeholder="Confirma tu correo" type="email" name="email2" onChange={(e) => setValidateEmail(e.target.value)} />
                            <button className="btn btn-success" type='submit'> Finalizar compra</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default Checkout