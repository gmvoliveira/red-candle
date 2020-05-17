import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import AlbumList from './AlbumList'
import GirandoleClient from '../GirandoleClient'
import AlbumFilter from './AlbumFilter'
import Genres from './Genres'
import { loadAlbums } from '../actions'

import '../App.css'


const girandoleClient = new GirandoleClient()


const App = (props) => {
    const [genreSuggestions, setGenreSuggestions] = useState(null)

    useEffect(() => {
        girandoleClient.getAlbums()
            .then(data => props.loadAlbums(data))
    }, [])

    useEffect(() => {
        if (props.selectedAlbum !== null) {
            girandoleClient.getSuggestedGenres(props.selectedAlbum.id)
                .then(data => setGenreSuggestions(data))
        }
    }, [props.selectedAlbum])

    return (
        <div>
            <div className="header">
                <AlbumFilter />
                <AlbumList albums={props.albums ?? []} />
            </div>
            <main className="content">
                <h2>Genres</h2>
                    <Genres album={props.selectedAlbum} suggestions={genreSuggestions?.suggested_genres ?? []} />
            </main>
          </div>
    )
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    selectedAlbum: state.selectedAlbum
})

const mapDispatchToProps = (dispatch) => ({
    loadAlbums: (data) => { dispatch(loadAlbums(data)) }
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
