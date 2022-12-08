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
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";


export default function App() {
    return (
        <div className='App'>
            <h1>Fundamentos React </h1>

            <div className="Cards">

                <Card titulo="#12 - [NOME]" color="#FF1E51">

                </Card>

                <Card titulo="#11 - Contador" color="#6A1C21">
                    <Contador numeroInicial = {10}></Contador>
                </Card>

                <Card titulo="#10 - Componente Controlado (Input)" color="#6F1E51">
                    <Input></Input>
                </Card>

                <Card titulo="#09 - Comunicação Indireta" color="#9980FA">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#08 - Comunicação Direta" color="#006266">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#07 - Par ou Impar" color="#FDA7DF">
                    <ParOuImpar numero = {90}></ParOuImpar>
                    <UsuarioInfo usuario = {{nome:"Weslles"}}></UsuarioInfo>
                    <UsuarioInfo usuario = {{email:"Weslles"}}></UsuarioInfo>
                    <UsuarioInfo></UsuarioInfo>
                </Card>

                <Card titulo="DESAFIO - REPETIÇÃO" color="#CABECA">
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