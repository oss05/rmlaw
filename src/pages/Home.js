import React, { Component } from 'react';
import Img from '../components/Img';
import Areas from '../components/Areas';
import '../css/MainContent.css';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mainContent">
            <Img/>
            <Areas/>
        </div>  
         );
    }
}
 
export default Home;