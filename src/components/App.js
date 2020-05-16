import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import AlbumList from './AlbumList'
import GirandoleClient from './Albums'
import AlbumFilter from './AlbumFilter'
import GenreSuggestionList from './GenreList'

import './App.css'
import image from '../images/candlestick-holder.svg'


const girandoleClient = new GirandoleClient()


const App = (props) => {
    const [albums, setAlbums] = useState(null)
    const [genreSuggestions, setGenreSuggestions] = useState(null)

    useEffect(() => {
        girandoleClient.getAlbums().then(data => setAlbums(data))
    }, [])

    useEffect(() => {
        if (props.selectedAlbumId !== null) {
            girandoleClient.getSuggestedGenres(props.selectedAlbumId)
                .then(data => setGenreSuggestions(data))
        }
    }, [props.selectedAlbumId])

    return (
        <div>
            <div className="header">
                <AlbumFilter />
                <AlbumList albums={albums ?? []} />
            </div>
            <main className="content">
                <h2>Genres</h2>
                <div id="genrelist-empty" className="content-empty">
                    <img alt="" src={image} style={{maxWidth: '100%'}} />
                    <p style={{marginTop: '-3rem', textAlign: 'center', marginBottom: 0}}>Selecteer in de lijst aan de linkerkant een album om de meestgebruikte genres voor een album op te halen.</p>
                </div>
                <div id="genrelist" className="list">
                    <GenreSuggestionList suggestions={genreSuggestions?.suggested_genres ?? []} />
                </div>
            </main>
          </div>
    )
}

const mapStateToProps = (state) => ({
    selectedAlbumId: state.selectedAlbum
})


export default connect(mapStateToProps, null)(App)
