import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'

import { useRef } from 'react';

import {TweenMax, Power3} from 'gsap'



function Header(){

    let head = useRef(null)
    
    useEffect(() => {
        TweenMax.from(head, 1.4, {opacity: 0, y: -90, ease: Power3.easeOut, delay: 0.2})
    },[])


    return(
            <div 
            ref={el => head = el}
            className="header">
                <h1>-PORTFOLIO</h1>
                <ul>
                    <Link to="/works">
                        <li>Мои проекты</li>
                    </Link>
                    <li>Резюме</li>
                    <li>Услуги</li>
                </ul>
            </div>
    )
}

export default Header;