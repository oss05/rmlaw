import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import imgCompetencia from '../assets/competencia.jpg';
import '../css/MainContent.css';

class Telecomunicaciones extends Component {
    state = {}
    render() {

        return (
            <div className="mainContentAll">
                <Title
                    contenido='contenido.competenciaEconomica.title'
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgCompetencia}
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