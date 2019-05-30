import React from 'react';
import Area from './Area';
import "../css/Area.css";

const Areas = props => {
    return(
    <div className="areas">
        <Area areaLink="telecomunicaciones"  linkArea="navbar.telecom.content"/>
        <Area areaLink="creditos-finanzas"  linkArea="navbar.creditos.content"/>
        <Area areaLink="radiodifusion" linkArea="navbar.radio.content"/>
        <Area areaLink="derecho-corporativo"  linkArea="navbar.transaccional.content"/>
        <Area areaLink="energia" linkArea="navbar.energia.content"/>
        <Area areaLink="competencia-economica"  linkArea="navbar.competenciaEconomica.content"/>
        <Area areaLink="asesoria-legislativa"  linkArea="navbar.asesoria.content"/>
        <Area areaLink="litigio"  linkArea="navbar.litigio.content"/>
    </div>
)}
export default Areas;