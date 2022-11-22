import React from 'react';

const Encabezado = (props) => {
    return (
        <div>
            <h2>{props.subtitulo}</h2>
            {props.children}
        </div>
    );
}

export default Encabezado;
