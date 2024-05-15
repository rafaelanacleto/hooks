import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'

const UseContext = (props) => {

    const context = useContext(DataContext)

    function setNum(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio 01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>

                <div>
                    <button className='btn' onClick={() => setNum(1)}>
                        Aumenta
                    </button>

                    <button className='btn' onClick={() => setNum(-1)}>
                        Diminui
                    </button>
                </div>
            </div>

            <SectionTitle title="Exercicio 02" />
            <div className="center">
                exerc 02
            </div>
        </div>
    )
}

export default UseContext