import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import imgDerecho from '../assets/derecho.jpg';
import '../css/MainContent.css';

class Telecomunicaciones extends Component {
    state = {}
    render() {

        return (
            <div className="mainContentAll">
                <Title
                    contenido='contenido.transaccional.title'
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgDerecho}
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

export default Telecomunicaciones;