import { useEffect, useState } from "react";
import { getProducts, products  } from "../mock/AsyncService";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "../components/LoaderComponent"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import "../css/app.css"

const ItemListContainer = (props) => {

    const [data, setData] = useState([]);
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(false)


    //FIREBASE

    useEffect(() => {
        setLoading(true)
        //conectarnos con nuestra colección
        const camposCollection = categoryId ? query(collection(db, "campos"), where("category", "==", categoryId)) : collection(db, "campos")
        //pedir los datos / documentos
        getDocs(camposCollection)
            .then((res) => {
                //Limpiar los datos para poder utilizar
                const list = res.docs.map((doc)=> {
                    return {
                        ...doc.data(),
                        id:doc.id
                    }
                })
                setData(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])

    const { greeting } = props;

    return (
        <>
            {
                loading
                    ? <LoaderComponent />
                    : <div className="greetingDiv">
                        <h1>{greeting}{categoryId && <span style={{ textTransform: "capitalize" }}> {categoryId}</span>}</h1>
                        <ItemList data={data} />
                    </div>
            }
        </>
    )
}

export default ItemListContainer;