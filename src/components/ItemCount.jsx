// Imports fuera del componente
import { useState } from 'react'

const ItemCount = ({ stock }) => {
    // Hacemos la lógica, funciones, hook fuera del return o fuera de una función
    // El hook siempre se declara de la siguiente forma
    // En el indice cero la variable, en el índice 1 la función modificadora
    const [count, setCount] = useState(1)

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <div>
                <button className='btn btn-danger' onClick={restar}>-</button>
                <span className='btn'>{count}</span>
                <button className='btn btn-success' onClick={sumar}>+</button>
            </div>
            <button className='btn btn-primary'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount