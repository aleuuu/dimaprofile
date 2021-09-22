import React from 'react';
import { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import Project1 from '../img/unknown.png'

import {TweenMax, Power3} from 'gsap'




function MainPage(props) {

    let wrapper = useRef(null)
    let progectC = useRef(null)
    let text = useRef(null)
    
    let Down =(() => {
        TweenMax.to(text, 1.7, {opacity: 0, y: -700, ease: Power3.easeOut,})
        TweenMax.to(progectC, 1.7, {opacity: 0, y: -700, ease: Power3.easeOut,})
    })


    useEffect(() => {
        TweenMax.from(wrapper, 1.7, {opacity: 0, x: 1080, ease: Power3.easeOut,})
        TweenMax.from(progectC, 1.5, {opacity: 0, y: 30, ease: Power3.easeOut, delay: 1.7})
        TweenMax.from(text, 1.5, {opacity: 0, y: 30, ease: Power3.easeOut, delay: 1.7})
    },[])

    return (
        <div className="background">
            <div 
                ref={el => wrapper = el}
                className="wrapper">
                <div className="containerPageWorks">
                    <h1>Проекты</h1>
                    <div className="rowWorks">
                        <div
                        ref={el => text = el}>
                            <p>Проект, разработанный<br/> для моего колледжа, является системой дополнительного образования</p>
                            <span>2021</span>
                        </div>
                        
                        <img 
                        ref={el => progectC = el}
                        src={Project1} className="project1"></img>
                    </div>
                    <p onClick={Down} className="down">Еще</p>
                    <Link to='/'>
                        <p className="backB">Назад</p>
                    </Link>
                </div>
                
            </div>
        </div>
        
        
    )
}

export default MainPage;