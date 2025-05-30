import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncService";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

    const [data, setData] = useState([]);
    const {categoryId}= useParams()

    useEffect(() => {
        // Ejecutar mi función de promesa, tratarla con el then
        getProducts()
            .then((response) => {
                if (categoryId) {
                    //filtrar
                    setData(response.filter((prod)=> prod.category === categoryId))
                } else {
                    //no filtro
                    setData(response)
                }

            })
            .catch((error) => console.error(error))
    }, [categoryId])

    const { greeting } = props;

    return (
        <div>
            <h1>{greeting}{categoryId && <span style={{textTransform: "capitalize"}}> {categoryId}</span>}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer;