import React from 'react';
import vk from '../icons/icons8-vk-circled-25.png'
import instagram from '../icons/icons8-instagram-25.png'
import facebook from '../icons/icons8-facebook-25.png'
import {Link} from 'react-router-dom'

import { useEffect, useRef } from 'react';

import {TweenMax, Power3} from 'gsap'



function Content(props) {
    
    
    let textDew = useRef(null)
    let text = useRef(null)
    let textP = useRef(null)
    let but = useRef(null)
    let contacts = useRef(null)


    useEffect(() => {
        TweenMax.from(textDew, 1.4, {opacity: 0, y: -40, ease: Power3.easeOut, delay: 1.2})
        TweenMax.from(text, 1.4, {opacity: 0, y: -40, ease: Power3.easeOut, delay: 1.6})
        TweenMax.from(textP, 1.4, {opacity: 0, y: -40, ease: Power3.easeOut, delay: 2.0})
        TweenMax.from(but, 1.6, {opacity: 0, x: -140, ease: Power3.easeOut, delay: 2.4})
        TweenMax.from(contacts, 1.6, {opacity: 0, x: -140, ease: Power3.easeOut, delay: 3.0})
    },[])

    
    return(
        <div>
            <div className="content">
                <div className="container">
                    <h1
                    ref={el => textDew = el}
                    >WEB DEVELOPER</h1>
                    <h2
                    ref={el => text = el}
                    >МЕДВЕДЕВ ДМИТРИЙ</h2>
                    <p
                    ref={el => textP = el}
                    >Этот сайт - мое портфолио,<br/> на нем представлены мои проекты, информация обо мне,<br/> а так же резюме.
                    </p>
                    <button
                    ref={el => but = el}
                    >Читать больше</button>
                    <ul 
                    ref={el => contacts = el}
                    className="contacts">
                        <a href='https://vk.com/aleu_dima' target="blank">
                            <li className="item">
                                <img src={vk}></img>
                            </li>
                        </a>
                        <a href='https://www.instagram.com/aleu_dima/' target="blank">
                            <li className="item">
                                <img src={instagram}></img>
                            </li>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100069712394626' target="blank">
                            <li className="item">
                                <img src={facebook}></img>
                            </li>
                        </a>  
                    </ul>
                </div>
            </div>

            
        </div>
        
    )
}

export default Content;