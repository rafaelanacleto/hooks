import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter(500)

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
        </div>
    )
}

export default UseRef