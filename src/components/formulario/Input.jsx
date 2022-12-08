import React from "react";
import { useState } from "react";
import "./Input.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [valor, setValor] = useState('Inicial');
    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <div className="InputFormat">
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )
}