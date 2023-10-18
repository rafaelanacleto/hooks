import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {

    const num = parseInt(n)
    if(num < 0) return -1
    if(num === 0) return 1

    return calcFatorial(num -1) * num
}

function parImparCalc (n) {
    if(n < 0) return "Erro"

    if ((n % 2) === 0 ) {
        return "PAR"
    }else {
        return "IMPAR"
    }
}

const UseEffect = (props) => {

    const [count, setCount] = useState(0)
    const [fatorial, setFatorial] = useState(0)
    const [parImpar, setParImpar] = useState(0)

    useEffect(function() {
        setFatorial(calcFatorial(count))
    }, [count])

    useEffect(function() {
        setParImpar(parImparCalc(count))
    }, [count])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio 01"></SectionTitle>
            <span className="text">Fatorial</span>
            <span className="text red">{fatorial}</span>

            <input type="number" name="" id="" className='input' value={count} onChange={e => setCount(e.target.value)} />

            <SectionTitle title="Exercicio 02"></SectionTitle>
            <span className="text">Par ou Ímpar</span>
            <span className="text red">{parImpar}</span>

        </div>
    )
}

export default UseEffect