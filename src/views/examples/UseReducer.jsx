import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const inicialEstado = {
    other: '...',
    number: 0
}


function reducer(state, action) {
    switch (action.type) {
        case 'add2':
            return {...state, number: state.number + 2}
            break;
        case 'oth' :
            return {}
            break;    
        default:
            return state
            break;
    }
}

const UseReducer = (props) => {
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
        </div>
    )
}

export default UseReducer
