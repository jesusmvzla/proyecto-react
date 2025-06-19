import React from 'react'
import { Link } from 'react-router-dom'
import "../css/app.css"

const EmpyCart = () => {
    return (
        <div className="carritoVacio" style={{padding: "2rem"}}>
            <h2>Tu carrito está vacío</h2>
            <Link className='btn btn-dark'to="/">Ver reservas o productos</Link>
        </div>
    )
}

export default EmpyCart