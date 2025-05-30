import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ detalle }) => {
    return (
        <div>
            <h2>{detalle.name}</h2>
            <img src={detalle.img} alt={detalle.name} />
            <h3>{detalle.description}</h3>
            <p>{detalle.stock} {detalle.stockType} disponibles</p>
            <ItemCount stock={detalle.stock}/>
            <br></br>
            <h4>Precio: ${detalle.price}</h4>
            <a className="btn btn-dark" href="">{detalle.action}</a>
        </div>
    )
}

export default ItemDetail