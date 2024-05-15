import React, { useState } from "react";
import App from "../views/App";

const initialState = {
    number: 0,
    text: 'context api + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = props => {

    const [state, setState] = useState(AppContext)

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setNumber: t => updateState('text', t)
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store;