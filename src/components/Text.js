import React, { Component } from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import es from '../lang/es';
import en from '../lang/en';
import '../css/Text.css';

counterpart.registerTranslations('es', es);
counterpart.registerTranslations('en', en);
counterpart.setLocale('es');

class Text extends Component {
    
    render() { 
        return ( 
            <div className="text">
                <Translate {...this.props} component="p" style={{fontSize:this.props.fontSize, color:"#635f7d", marginTop:this.props.paddingTop}}/>
            </div>
         );
    }
}
 
export default Text; 