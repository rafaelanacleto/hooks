import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("valor inicial....")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio 01 - UseState" />
            <div className="center">
                <span className='text'>{count}</span>
                <div>
                    <button type="button" className='btn' onClick={() => setCount(count + 1)} >+1</button>
                    <button type="button" className='btn' onClick={() => setCount(count - 1)} >-1</button>
                </div>
            </div>
            <SectionTitle title="Exercicio 02 - Other" />
            <div className="center">
                <input type="text" className="input"  value={name} onChange={e => setName(e.target.value)} />
                <hr></hr>
                <span className='text'>{name}</span>
            </div>    
        </div>
    )
}

export default UseState
