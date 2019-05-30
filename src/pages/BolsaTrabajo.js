import React, { Component } from 'react';
import Title from '../components/Title'
import Abogado from '../components/Abogado';
import '../css/MainContent.css';

class Abogados extends Component {
    state = {}
    render() {
        return (
            <div className="mainContentAll">
                <div className="lawyer-title">
                   
                </div>
                <Title
                    contenido='contenido.bolsaDeTrabajo.subtitle'
                />
                <div className="input-component">
                   
                    <label htmlFor="name" >Name:
                        <input id="name" type="text" />
                    </label>
                    <label htmlFor="email">Email:
                        <input id="email" type="email" />
                    </label>
                    <label htmlFor="phone">Phone Number:
                        <input id="phone" type="text" />
                    </label>
                    <label htmlFor="subject">Subject:
                        <input id="subject" type="text" />
                    </label>
                    <label htmlFor="message">Message:
                        <textarea id="message" type="text" />
                    </label>
                    <button type="submit">✓Submit</button>
                   
                </div>
            </div>
        );
    }
}

export default Abogados;