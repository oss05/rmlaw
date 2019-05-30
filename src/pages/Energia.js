import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import imgEnergia from '../assets/energia2.jpg';
import '../css/MainContent.css';

class Telecomunicaciones extends Component {
    state = {}
    render() {

        return (
            <div className="mainContentAll">
                <Title
                    contenido='contenido.energia.title'
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgEnergia}
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