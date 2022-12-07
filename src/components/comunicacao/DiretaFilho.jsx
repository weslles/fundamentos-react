import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <div>{props.texto}, <strong> {props.numero} anos</strong>, {props.bool ? 'Verdadeiro' : 'Falso'}</div>
            <div> </div>
            <div></div>
        </div>
    )
}