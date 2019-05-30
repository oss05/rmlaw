import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import imgQuienesSomos from '../assets/logo-grande.jpg';
import '../css/MainContent.css';


class QuienesSomos extends Component {
    state = {}
    render() {

        return (
            <div className="mainContentAll">
                <Title
                    contenido='contenido.creditos.title'
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgQuienesSomos}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        
                    </div>
                </section>

            </div>
        );
    }
}

export default QuienesSomos;