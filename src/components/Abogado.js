import React from 'react';
import Translate from 'react-translate-component';
import '../css/MainContent.css';

const Abogado = props => {
    return(
        <div>
            <a className='lawyer' href={props.abogadoPage}>
                <p style={{fontSize:17 ,color:"#000"}}>{props.Nombre}</p>
                <Translate style={{fontSize:13, color:"#1b8ab4"}} className="font" content={props.Rol} component="p" />
                <Translate style={{fontSize:15, color:"#1b8ab4"}} className="font" content="contenido.abogados.sintesis" component="p" />
            </a>
        </div>
    )
}

export default Abogado;