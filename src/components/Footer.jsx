import React from 'react'
import "../css/app.css"

const Footer = () => {
    return (
        <>
        <div className='redBarFooter'></div>
        <footer className='footer'>
            <div className='redes'>
                Síguenos en nuestras redes
                <ul>
                    <li>
                        <img src="../assets/img/ig.png" alt="" /> @HITAirsoftBog
                    </li>
                    <li>
                        <img src="../assets/img/fb.png" alt="" /> @HIT Airsoft Bogotá
                    </li>
                </ul>
            </div>

            <div>
                www.hit-airsoft.co
                <p>Realizado por Jesús Morales para Coder House</p>
            </div>

            <div>
                Contáctanos a hitairsoft@gmail.com
            </div>
        </footer>
        </>
    )
}

export default Footer