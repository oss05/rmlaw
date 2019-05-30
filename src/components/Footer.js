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
                        
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;