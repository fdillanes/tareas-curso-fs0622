import React from 'react';
import Encabezado from './encabezado';
const frases = [
    {
      id:1,
      texto: "hola vainilla"},
      {
        id:2,
        texto:"hola chocolate"
      },
      {id:3,
    texto:"hola jamón"}
    ];
const titulito = "Hermoso"
const Parrafos = () => {
    return (
        <div>
            <Encabezado subtitulo={titulito} />
            {frases.map(frase => {
                return <p key={frase.id}>{frase.texto}</p>
            })}
            
        </div>
    );
}

export default Parrafos;
