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
import { updateAlbum } from './actions'

const store = createStore(redCandle)


/* This logic is nice I guess, but it shouldn't be placed here... */

const girandoleClient = new GirandoleClient()

observeStore(
    store,
    state => state.selectedGenre,
    async function (selectedGenre) {
        const state = store.getState()
        if (state.selectedAlbum != null && selectedGenre != null) {
            const updatedAlbum = (await girandoleClient.updateGenre(state.selectedAlbum.id, selectedGenre))[0]
            store.dispatch(updateAlbum(state.selectedAlbum.id, updatedAlbum))
        }
    }
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
