import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const inicialEstado = {
    other: '...',
    number: 0,
    name: 'rafael',
    user: null
}

function reducer(state, action) {
    switch (action.type) {
        case 'add2':
            return {...state, number: state.number + 2}
            break;
        case 'login' :
            return {...state, user: {name: action.name, senha: '12345'}}
            break;    
        default:
            console.log({...state})
            return state 
            break;
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, inicialEstado)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">
                    {state.number}
                </span>

                {state.user ? 
                    <span className="text"><h4>Login e Senha:</h4> {state.user.name} / {state.user.senha}</span>
                    : <span className="text">Sem Usuario</span>            
                }
                
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'add2'})}>+2</button>
                </div>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'login', name: 'MAria'})}>Login</button>
                </div>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'reset'})}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer