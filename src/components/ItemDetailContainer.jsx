import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})
    const { itemId } = useParams()
    const [invalid, setInvalid]= useState (false)
    const [cargando, setCargando] = useState(false)

    //FIREBASE
    useEffect(() => {
        setCargando(true)
        //Conectar con la colección
        const camposCollection = collection(db, "campos")
        //Se debe crear una referencia al documento que queremos traer
        const docRef = doc(camposCollection, itemId)
        //Traer un documentrio
        getDoc(docRef)
        .then ((res)=> {
            if(res.data()){
                setDetalle({...res.data(), id:res.id})
            } else {
setInvalid(true)
            }
        })
        .catch ((error)=> console.log(error))
        .finally(()=> setCargando(false))
    }, [])

if (invalid){
    return (
        <div>
            <h2>
                Producto no existe
            </h2>
            <link className='btn btn-dark'>
            Volver al inicio
            </link>
        </div>
    )
}
    return (
        <>
            {
                cargando
                    ? <LoaderComponent />
                    : <div>
                        <ItemDetail detalle={detalle} />
                    </div>
            }
        </>
    )
}

export default ItemDetailContainer