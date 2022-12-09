import React from "react";
import Botoes from "./Botoes";
import "./Contador.css"
import Display from "./Display";
import PassoForm from "./PassoForm";

class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} ></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }
} export default Contador;