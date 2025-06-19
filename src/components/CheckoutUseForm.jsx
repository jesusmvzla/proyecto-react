import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../service/firebase';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

const CheckoutUseForm = () => {

    const [orderId, setOrderId] = useState("")
    const { cart, cartTotal, clear } = useContext(CartContext)
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()

    const finalizarCompra = (dataDelForm) => {
        let orden = {
            comprador: {
                name: dataDelForm.name,
                telefono: dataDelForm.telefono,
                email: dataDelForm.email
            },
            compras: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        const ventas = collection(db, "orders")
        // agregar un doc a la collection orders
        addDoc(ventas, orden)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))

        toast.success('¡Pedido realizado!');
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
                        <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={handleSubmit(finalizarCompra)}>

                            <input className="form-control" placeholder="Nombre completo" type="text" name="name" {...register("name", { required: true, minLength: 3, })} />
                            {errors?.name?.type === "required" && <span style={{ color: "red" }}>¡Por favor, completa tu nombre!</span>}
                            {errors?.name?.type === "minLength" && <span style={{ color: "red" }}>Tu nombre debe tener al menos 3 caracteres</span>}

                            <input className="form-control" placeholder="Teléfono de contacto" type="text" name="telefono" {...register("telefono", { required: true, minLength: 9, })} />
                            {errors?.telefono?.type === "required" && <span style={{ color: "red" }}>Completa tu teléfono de contacto</span>}
                            {errors?.telefono?.type === "minLength" && <span style={{ color: "red" }}>Ingresa un teléfono válido</span>}

                            <input className="form-control" placeholder="Correo electrónico" type="email" name="email" {...register("email", { required: true })} />
                            {errors?.email?.type === "required" && <span style={{ color: "red" }}>Ingresa tu email</span>}

                            <input className="form-control" placeholder="Confirma tu correo" type="email" name="email2" {...register("email2", { required: true, validate: { equalsMail: email2 => email2 === getValues().email } })} />
                            {errors?.email2?.type === "required" && <span style={{ color: "red" }}>Confirma tu email</span>}
                            {errors?.email2?.type === "equalsMail" && <span style={{ color: "red" }}>Asegúrate de incluir el mismo email en ambas casillas</span>}

                            <button className="btn btn-success" type='submit' onClick={{}}> Finalizar compra</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default CheckoutUseForm