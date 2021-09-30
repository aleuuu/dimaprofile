import React from 'react'

import {useEffect, useRef} from 'react'
import {TweenMax, Power3} from 'gsap'

import Dima from '../img/фыввввв.jpg'

function More(props){

    let whiteBack = useRef(null)

    useEffect(() => {
        TweenMax.from(whiteBack, 1.8,{opacity: 1, y: 1080, ease: Power3.easeOut,})
    },[])

    return(
        <div className="background">
            <div 
            ref={el => whiteBack = el}
            className="wrapper">
                <div className="containerPageMore">
                    <h1>Обо мне</h1>
                    <div className="rowMore">
                        <div>
                            <h3 className="dimaMargin">Медведев Дмитрий</h3>
                            <strong>React разработчик; Front-end developer</strong><br/><br/>
                            <p>Студент 4 курса, колледжа ТСПК <br/>
                            Учусь по специальности 'веб-дизайнер', проектирую интерфейсы,<br/>реализовываю анимацию на странице, создаю SPA приложения.</p>
                        </div>
                        <img className="dima" src={Dima}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default More;