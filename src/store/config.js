//usado no UseReducer

export const inicialEstado = {
    other: '...',
    number: 0,
    name: 'rafael',
    user: null
}

export function reducer(state, action) {
    switch (action.type) {
        case 'add2':
            return { ...state, number: state.number + 2 }
            break;
        case 'login':
            return { ...state, user: { name: action.name, senha: '12345' } }
            break;
        default:
            console.log({ ...state })
            return state
            break;
    }
}