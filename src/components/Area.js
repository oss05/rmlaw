import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Translate from 'react-translate-component';
import "../css/Area.css";

const Area = props => {
    return (
        <a  href={props.areaLink} className="area linkArea">
            <div className="area">
                <FontAwesomeIcon className="ii" icon="book" />
                <Translate className="font" content={props.linkArea} component="p" />
            </div>
        </a>

    )
}

export default Area;
