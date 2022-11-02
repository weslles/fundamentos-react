import React from "react";

export default function Aleatorio(props) {
    const num = Math.floor(Math.random() * (props.max - props.min) + props.min);
    return (
        <div>
            <h2>Numero aleatório no intervalor [min, max]:</h2>
            <p>Valor Min: {props.min}</p>
            <p>Valor Max: {props.max}</p>
            <p>Num. Aleatorio: {num}</p>
        </div>
    )
}