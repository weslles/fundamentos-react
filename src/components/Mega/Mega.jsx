import React, { Component, useState } from 'react'
import './Mega.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function gerarNumeros(min, max, qtde) {
        let numb = []
        let i = 0
        let aux
        while (i < qtde) {

            aux = Math.floor(Math.random() * (max - min) + min)
            if (numb.length == 0) {
                numb.push(aux)
            } else {
                for (let j = 0; j < numb.length; j++) {
                    if (aux == numb[j]) {
                        aux = Math.floor(Math.random() * (max - min) + min)
                        j = -1
                    }
                }
                numb.push(aux)
            }
            i++
        }
        numb.sort((n1, n2) => n1 - n2)
        return numb
    }
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numInicial = Array(qtde).fill("_")
    const [numeros, setNumeros] = useState(numInicial)


    return (
        <div className="Mega">
            <h2><strong>Mega Sena</strong></h2>
            <h3><strong>{numeros.join(" ")}</strong></h3>
            <div>
                <label>Quantidade de Números </label>
                <input type="number" value={qtde} min="6" max="15"
                    onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(1, 60,qtde))}>Gerar Numeros</button>
        </div>
    )
}

/* class Mega extends Component {

    gerarNumeros = (min, max, qtde) => {
        let numb = []
        let i = 0
        let aux
        while (i < qtde) {

            aux = Math.floor(Math.random() * (max - min) + min)
            if (numb.length == 0) {
                numb.push(aux)
            } else {
                for (let j = 0; j < numb.length; j++) {
                    if (aux == numb[j]) {
                        aux = Math.floor(Math.random() * (max - min) + min)
                        j = -1
                    }
                }
                numb.push(aux)
            }
            i++
        }
        numb.sort((n1, n2) => n1-n2)
        return numb.join(" ")
    }

    const [numeros, setNumeros] = useState(Array(props.qtde).fill(0))

    render() {
        return (
            <div className="Mega">
                <h2><strong>Numeros sorteados:</strong></h2>
                <h3><strong>{numeros}</strong></h3>
            </div>
        )
    }
}

export default Mega */