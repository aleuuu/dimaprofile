import React from 'react';
import Header from './Header'
import Content from './Content'
import Photo from '../img/asdaffgfgh.png'

import { useEffect, useRef } from 'react'

import {TweenMax, Power3} from 'gsap'


function Main(){

    let photo = useRef(null)

    useEffect(() => {
        TweenMax.from(photo, 1.8, {opacity: 0, x: 190, ease: Power3.easeOut, delay: .8})
    },[])

    return (
        <div className="background" id='a'>
            <div className="row">
                <div>
                    
                </div>
                <img 
                    ref={el => photo = el}
                    src={Photo}>
                </img>
            </div>
            <div className="container">
                <Header></Header>
            </div>
                <Content></Content>
        </div>
        
    )
}

export default Main;