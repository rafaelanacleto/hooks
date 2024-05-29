import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter(500)
    const response = useFetch('http://files.cod3r.com.br/curso-react/estados.json', 'GET')

    function showState(states) {
        
        return states.map(state =>
        <div className='left'>
            <li key={state.nome}>{state.nome} / {state.sigla}</li>
        </div>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercicio 01"></SectionTitle>
            <div className="center">
                <span className="text">{count}</span>
            </div>
            <div className="center">
                <button className="btn" onClick={() => inc()}>Inc</button>
                <button className="btn" onClick={() => dec()}>Dec</button>
            </div>
            <SectionTitle title="Exercicio 02"></SectionTitle>
            <div className="center">
                <ul className='ulClass'>
                   {response.data ? showState(response.data) : ""}
                </ul>
            </div>            
        </div>
    )
}

export default UseRef