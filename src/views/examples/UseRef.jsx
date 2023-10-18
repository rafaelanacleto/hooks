import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import SectionTitle from '../../components/layout/SectionTitle'
import { useRef } from 'react'

const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const count = useRef(0)
    count.current++

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio 01"></SectionTitle>
            <div className="center">
                <span className="text">Valor: {value1} - [ {count.current} ]</span>
                <input type="text" className="input"
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercicio 02"></SectionTitle>
            <div className="center">
                
            </div>


        </div>
    )
}

export default UseRef
