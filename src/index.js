import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import redCandle from './reducers'
import { observeStore } from './utils'
import GirandoleClient from './GirandoleClient'

const store = createStore(redCandle)


/* This logic is nice I guess, but it shouldn't be placed here... */

const girandoleClient = new GirandoleClient()

observeStore(
    store,
    state => state,
    ({selectedAlbum, selectedGenre}) => girandoleClient.updateGenre(selectedAlbum, selectedGenre) // This is not entirely what I want. It now triggers also when selecting an album.
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
