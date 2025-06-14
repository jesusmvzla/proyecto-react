import camp170 from "../assets/img/campo-170.png";
import campChia from "../assets/img/campo-chia.png";
import bbs4k25 from "../assets/img/bbs-4k-25.jpg";
import facemask from "../assets/img/facemask-airsoft.png"
import googlesEvike from "../assets/img/googles-airsoft.png";


export const products = [
    {
        name: "Reserva campo 170 - 2 horas",
        price: 60000,
        description: "Reserva de dos horas en nuestro campo techado en la calle 170. Si no tienes tu equipamiento, la reserva incluye réplica, protección de torso y cara, cargador con 450 bbs.",
        stock: 6,
        stockType:"horas",
        img: camp170,
        category: "campo170",
        action: "Reservar"
    },
    {
        name: "Reserva campo Chía - 1 hora",
        price: 35000,
        description: "Reserva de una hora en nuestro campo abierto ubicado en Chía. Si no tienes tu equipamiento, la reserva incluye réplica, protección de torso y cara, cargador con 450 bbs.",
        stock: 8,
        stockType:"horas",
        img: campChia,
        category: "campochia",
        action: "Reservar"
    },
    {
        name: "Reserva campo Chía - 2 horas",
        price: 60000,
        description: "Reserva de dos horas en nuestro campo abierto ubicado en Chía. Si no tienes tu equipamiento, la reserva incluye réplica, protección de torso y cara, cargador con 450 bbs.",
        stock: 4,
        stockType:"horas",
        img: campChia,
        category: "campochia",
        action: "Reservar"
    },
    {
        name: "Bolsa de BBs - 4.000 - 0.25",
        price: 60000,
        description: "BBs Swiss Arms 0.25g de alta precisión, calibre 6 mm, ideales para réplicas de airsoft AEG y GBB, con empaque de 1 kg (aprox. 4.000 unidades) y excelente rendimiento en combate simulado.",
        stock: 30,
        stockType:"unidades",
        img: bbs4k25,
        category: "productos",
        action: "Comprar"
    },
    {
        name: "Malla facial - airsoft",
        price: 75000,
        description: "Máscara de malla facial para airsoft con protección metálica y ajuste lateral, diseñada para ofrecer máxima ventilación y resistencia a impactos en zonas críticas del rostro.",
        stock: 25,
        stockType:"unidades",
        img: facemask,
        category: "productos",
        action: "Comprar"

    },
    {
        name: "Gafas de grado 5 protección ocular",
        price: 130000,
        description: "Gafas tácticas de protección ocular grado 5, con lente resistente a impactos, marco flexible y correa ajustable, ideales para airsoft y entornos de alta exigencia.",
        stock: 18,
        stockType:"unidades",
        img: googlesEvike,
        category: "productos",
        action: "Comprar"
    }
]
let error = false

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve(products)
            } else {
                reject("Hubo un error, intente más tarde")
            }
        }, 2000)
    })

}

export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {

                let oneProduct = products.find((item)=> item.id === id)

                resolve(oneProduct)
            } else {
                reject("Hubo un error, intente más tarde")
            }
        }, 1000)
    })

}