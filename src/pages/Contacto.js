import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/MainContent.css';

class Contacto extends Component {
    state = {}
    render() {
        return (
            <div className="contacto">
                
                <div className="contactGroup">
                    <FontAwesomeIcon className="contactGroupIcon" icon="envelope" />
                    <p className="contactGroup">Email: contacto@rmabogados.com</p>
                </div>
                <div className="contactGroup">
                    <FontAwesomeIcon className="contactGroupIcon" icon="phone" />
                    <p className="contactGroup">Phone:(55) 1209 6611</p>
                </div>


            </div>
        );
    }
}

export default Contacto;