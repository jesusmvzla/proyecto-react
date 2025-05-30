import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <>
            <h2>La ruta no existe o no se encuentra disponible en este momento. </h2>
            <h2>Inténtalo más tarde.</h2>
            <Link className='btn btn-dark' to='/'>Volver al home</Link>
        </>
    )
}

export default Error