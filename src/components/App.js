import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import AlbumList from './AlbumList'
import GirandoleClient from '../GirandoleClient'
import AlbumFilter from './AlbumFilter'
import GenreSuggestions from './GenreSuggestions'

import '../App.css'


const girandoleClient = new GirandoleClient()


const App = (props) => {
    const [albums, setAlbums] = useState(null)
    const [genreSuggestions, setGenreSuggestions] = useState(null)

    /* Consider using the `Context API`. */
    useEffect(() => {
        girandoleClient.getAlbums().then(data => setAlbums(data))
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
                <AlbumList albums={albums ?? []} />
            </div>
            <main className="content">
                <h2>Genres</h2>
                    <GenreSuggestions album={props.selectedAlbum} suggestions={genreSuggestions?.suggested_genres ?? []} />
            </main>
          </div>
    )
}

const mapStateToProps = (state) => ({
    selectedAlbum: state.selectedAlbum
})


export default connect(mapStateToProps, null)(App)
