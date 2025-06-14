import { createContext, useState } from "react";

//Creamos el contexto
export const CartContext = createContext()

//Crear el proveedor

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    //Todas las funciones que modifiquen el estado
    
    //Añadir un item al carrito, no repetir usando el booleano de isInCart y en caso que sí sumar unidades
    const addItem = (item, cantidad) => {
        if(isInCart(item.id)) {
            // existe ese item en el carrito, tengo que sumarlo cantidades
            //Lógica de sumar
            const updatedCart = cart.map ((prod) => {
                if (prod.id === item.id) {
                    //sumar cantidades
                    return {...prod, quantity: prod.quantity + cantidad}
                } else {
                    //retorno el objeto sin modificar
                    return prod
                }
            })
            //Actualizar el carrito con su nuevo array
            setCart(updatedCart)
        } else {
            //Se agrega el producto nuevo
            setCart([...cart, {...item, quantity:cantidad}])
        }
    }
    //Borrar lo que está en el carrito, vaciar
    const clear = () => {
        setCart([])
    }

    //Eliminar un item del carrito
    const removeItem = (id) => {
        setCart (cart.filter((prod)=> prod.id !== id ))
    }

    //Devolver un booleano si está o no en el carrito para evitar duplicados
    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    //cantidad de items en el carrito que la van a usar en CartWidget

    const cartQuantity = () => {
        return cart.reduce ((acc, prod) => acc += prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce ((acc, prod) => acc += (prod.quantity * prod.price), 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}