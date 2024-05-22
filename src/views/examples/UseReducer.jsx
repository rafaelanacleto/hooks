import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const inicialEstado = {
    other: '...',
    number: 0,
    name: 'rafael',
    user: null
}

const valorLogin = {
    user: null,
    pass: null,
    status: false,
    age: 0
}

function reducer(state, action) {
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

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, inicialEstado)
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [age, setAge] = useState("")
    const [name, setName] = useState("")

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">
                    {state.number}
                </span>

                {state.user ?
                    <span className="text"><h4>Login e Senha:</h4> {state.user.name} / {state.user.senha}</span>
                    : <span className="text">Sem Usuario</span>
                }

                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'add2' })}>+2</button>
                </div>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'login', name: 'MAria' })}>Login</button>
                </div>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                </div>
            </div>

            <SectionTitle title="Exercicio 02" />
            <div className="center">
                <form>
                    <label>Enter your name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <br />
                    <hr />
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='formulario'>
                            <TextField id="outlined-basic" className='formulario' label="User" variant="outlined" onChange={(e) => setUser(e.target.value)} />
                            <TextField id="outlined-basic" className='formulario' label="Pass" variant="outlined" onChange={(e) => setPass(e.target.value)} />
                            <TextField id="outlined-basic" className='formulario' label="Age" variant="outlined" onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div>
                            <Button variant="outlined" onClick={() => console.log(user)}>Enviar</Button>
                        </div>

                    </Box>
                </form>
            </div>

        </div>
    )
}

export default UseReducer