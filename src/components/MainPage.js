import React from 'react';
import Header from './Header'
import Content from './Content'



function Main(){
    
    return (
        <div className="background" id='a'>
            <div className="container">
                <Header></Header>
            </div>
                <Content></Content>
        </div>
        
    )
}

export default Main;