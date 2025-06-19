// Imports fuera del componente
import { useState } from 'react'
import "../css/app.css"

const ItemCount = ({ stock, onAdd }) => {
    // Hacemos la lógica, funciones, hook fuera del return o fuera de una función
    // El hook siempre se declara de la siguiente forma
    // En el indice cero la variable, en el índice 1 la función modificadora

    const [count, setCount] = useState(1)

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className='contador'>
            <div>
                <button className='btn btn-danger botoncount' onClick={restar}>-</button>
                <span className='btn'>{count}</span>
                <button className='btn btn-success botoncount' onClick={sumar}>+</button>
            </div>
            <button className='btn btn-primary botoncount' onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount