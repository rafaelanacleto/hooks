import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio 01"></SectionTitle>
            <div className="center">
                <input type="text" className="input" />
            </div>


        </div>
    )
}

export default UseRef
