import React from 'react'
import { Link } from 'react-router-dom'
import "../css/app.css";


const Item = ({ prod }) => {
    return (

        <div className="card" style={{backgroundColor:"#ebd9c0"}}>
            <img src={prod.img} className="card-img-top" alt={prod.name} />
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">${prod.price}</p>
                <Link to={`/item/${prod.id}`} className="verMas btn-primary">Ver más</Link>
            </div>
        </div>

    )
}

export default Item