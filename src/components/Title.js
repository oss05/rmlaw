import React from 'react'
import Text from '../components/Text';
import '../css/Title.css'
import '../css/Text.css';

const Title = (props) => {
    return (
        <div className="preventTitle">
            <div className="title">
                <Text className="titleFont" content={props.contenido} component="h1" />
                <Text className="text" content='contenido.subtitle' component="p" />
            </div>
        </div>
    )
}

export default Title;