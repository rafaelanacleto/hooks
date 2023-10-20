import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext from '../data/DataContext'

const App = props => {

    return (
        <div className="App">
            <DataContext.Provider>
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </DataContext.Provider>
        </div>
    )
}

export default App