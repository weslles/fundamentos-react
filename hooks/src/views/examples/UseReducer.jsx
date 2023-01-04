import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}
var M = 0
function addM(n){
    M = parseInt(n)
}

function reducer(state, action) {
    
    switch (action.type) {
        case 'number_add1':
            return { ...state, number: state.number + 1 }
        case 'number_sub1':
            return { ...state, number: state.number - 1 }
        case 'number_mult7':
            return { ...state, number: state.number * 7 }
        case 'number_div25':
            return { ...state, number: state.number / 25 }
        case 'number_parseInt':
            return { ...state, number: parseInt(state.number) }
        case 'number_addM':
            return { ...state, number: state.number + M }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}


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
                    onChange={e => addM(e.target.value)}/>
                </div>

            </div>
        </div>
    )
}

export default UseReducer
