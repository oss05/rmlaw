import React from 'react';
import '../css/MainContent.css';

const Abogado = props => {
    return(
        <div>
            <a className='lawyer' href={props.abogadoPage}>
                <p style={{fontSize:17 ,color:"#000"}}>{props.Nombre}</p>
                
            </a>
        </div>
    )
}

export default Abogado;