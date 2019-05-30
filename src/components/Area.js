import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/Area.css";

const Area = props => {
    return (
        <a  href={props.areaLink} className="area linkArea">
            <div className="area">
                <FontAwesomeIcon className="ii" icon="book" />
            </div>
        </a>

    )
}

export default Area;
