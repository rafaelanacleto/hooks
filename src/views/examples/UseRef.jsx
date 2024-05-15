import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import SectionTitle from '../../components/layout/SectionTitle'
import { useRef } from 'react'
import { useEffect } from 'react'

const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    
    useEffect(function () {
        count.current++
    }, [value1])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio 01"></SectionTitle>
            <div className="center">
                <span className="text">Valor: {value1.concat(value2)} - [ {count.current} ]</span>
                <input type="text" className="input"
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercicio 02"></SectionTitle>
            <div className="center">
            <input type="text" className="input"
                    value={value2}
                    onChange={e => setValue2(e.target.value)}
                />
            </div>


        </div>
    )
}

export default UseRef
