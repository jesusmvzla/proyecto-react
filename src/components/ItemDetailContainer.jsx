import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer =() => {

    const [detalle, setDetalle] = useState({})
    const {itemId} = useParams()

    useEffect(() => {

        getOneProduct(itemId)
            .then((response)=> setDetalle (response))
            .catch ((error)=> console.log(error))

    }, [])

console.log(detalle)

    return (
        <div>

<ItemDetail detalle={detalle}/>

        </div>
    )
}

export default ItemDetailContainer