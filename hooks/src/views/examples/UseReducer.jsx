import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, reducer, addM } from '../../store'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title='Aula'></SectionTitle>
            <div className="center">
                {
                    state.user ?
                        <span className="text">{state.user.name}</span>
                        : <span className="text">Sem usuário!</span>
                }

                <span className="text"> {state.number} </span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Login</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_add1' })} >+1</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_sub1' })} >-1</button>
                </div>
            </div>
            <SectionTitle title='Desafio: ' />

            <div className="center">
                {/** Criar uma action que
                 * 1- Pegar o número e multiplicar por 7
                 * 2- dividir o numero atual por 25
                 * 3- fazer um parseInt
                 * 4- Adicionar um numero qualquer ao resultado
                */}
                <span className="text">N: {state.number}</span>

                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_mult7' })}>x7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_div25' })}>/25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_parseInt' })}>Int</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_addM' })}>add M</button>

                </div>
                <div>
                    <span className="text">M: </span><input type="number" className="text"
                        onChange={e => addM(e.target.value)} />
                </div>

            </div>
        </div>
    )
}

export default UseReducer
