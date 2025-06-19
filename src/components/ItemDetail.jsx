import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const ItemDetail = ({ detalle }) => {

    const [compra, setCompra] = useState(false)

const {addItem} = useContext (CartContext)

const onAdd = (cantidad) => {
    setCompra(true)
    addItem(detalle,cantidad)
    toast.success('¡Producto añadido al carrito!');
}

    return (
        <div>
            <h2>{detalle.name}</h2>
            <img src={detalle.img} alt={detalle.name} />
            <h3>{detalle.description}</h3>
            <br></br>
            <h4>Precio: ${detalle.price}</h4>
            <p>{detalle.stock} {detalle.stockType} disponibles</p>
            <br></br>
            {compra 
            ? <div style={{width:"80%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Link to="/" className='btn btn-dark'>Seguir comprando</Link>
                <Link to="/cart" className='btn btn-dark'>Ir al carrito</Link>
            </div>
            : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail