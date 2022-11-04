import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";


export default function App() {
    return (
        <div className='App'>
            <h1>Fundamentos React </h1>

            <div className="Cards">

                <Card titulo="#10 - [NOME]" color="#6F1E51">

                </Card>

                <Card titulo="#09 - [NOME]" color="#9980FA">

                </Card>

                <Card titulo="#08 - [NOME]" color="#006266">

                </Card>

                <Card titulo="#07 - [JÉSSICA = JULIANA]" color="#FDA7DF">

                </Card>

                <Card titulo="DESAFIO - REPETIÇÃO" color="#FDA7DF">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#C4E538">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 - Componente com FIlhos" color="#40E0D0">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" ></FamiliaMembro><p />
                        <FamiliaMembro nome="Ana"></FamiliaMembro><p />
                        <FamiliaMembro nome="Marcos"></FamiliaMembro><p />
                         
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60}></Aleatorio>
                </Card>

                <Card titulo="#03 - Fragmento" color="#FFBF00">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#6495ED">
                    <ComParametro
                        titulo='Situação do Aluno'
                        aluno='Weslles'
                        nota={9.5}>
                    </ComParametro>
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#DE3163">
                    <Primeiro></Primeiro>
                </Card>

            </div>
        </div>

    )
}