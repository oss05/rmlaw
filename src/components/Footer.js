import React, { Component } from 'react';

import Logo from '../assets/logoSOMA.png'
import '../css/Footer.css';



class Footer extends Component {

    render() {
        return (
            <div className="prevent-footer">
                <div className="footer">
                    <div className="left">
                        
                        <img src={Logo} alt="logo soma" />
                    </div>
                    <div className="right">
                        <select className="select" value={this.state.lang} onChange={this.onLangChange}>
                            <option value="es">ES</option>
                            <option value="en">EN</option>
                        </select>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;