import React from 'react'
import Item from './Item'

const ItemList = ({ data }) => {
    return (
        <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flexWrap:"wrap", padding:"2rem"}}>
            {data.map((prod) => <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList