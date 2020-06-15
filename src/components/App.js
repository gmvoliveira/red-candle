import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import AlbumList from './AlbumList'
import GirandoleClient from '../GirandoleClient'
import AlbumFilter from './AlbumFilter'
import Genres from './Genres'
import AlbumCover from './AlbumCover'
import LoaderMain from './LoaderMain'
import { GenreItem }  from './GenreItem'
import { loadAlbums, toggleFetchingGenres } from '../actions'

import image from '../images/candlestick-holder.svg'
import MessageEmpty from './MessageEmpty'
import '../styles/objects/app.css'
import '../styles/objects/header.css'
import '../styles/objects/content.css'


const girandoleClient = new GirandoleClient()


const App = (props) => {
    const [genreSuggestions, setGenreSuggestions] = useState(null)

    useEffect(() => {
        girandoleClient.getAlbums()
            .then(data => props.loadAlbums(data))
    }, [])

    useEffect(() => {
        if (props.selectedAlbum !== null) {
            let isMounted = true
            
            girandoleClient.getSuggestedGenres(props.selectedAlbum.id)
                .then(data => {
                    if (isMounted) {
                        setGenreSuggestions(data)
                        props.toggleFetchingGenres(false)
                    }
                })
            
            // Cleanup when unmounted
            return () => isMounted = false
        }
    }, [props.selectedAlbum])

    return (
        <div className="app">
            <div className="header">
                <AlbumFilter />
                { !props.fetchingAlbums
                    ? (<AlbumList albums={props.albums ?? []} />)
                    : (<LoaderMain />)
                }
            </div>
            { !props.selectedAlbum
                ? (
                    <main className="content">
                        <MessageEmpty 
                            url={image}
                            text="Select an album in the list on the left to retrieve its most popular genre suggestions."
                            altText="No album selected" />
                    </main>
                )
                : (
                    <main className="content">
                        <div className="content-header">
                            <div className="content-header-image">
                                {AlbumCover(props.selectedAlbum.id)}
                            </div>
                            <div className="content-header-body">
                                <h2 className="content-header-title">{props.selectedAlbum.albumartist}</h2>
                                <h3 className="content-header-subtitle">{props.selectedAlbum.album} - {props.selectedAlbum.year}</h3>
                                <div className="content-header-badges">
                                    <GenreItem genre={props.selectedAlbum.genre} />
                                </div>
                            </div>
                        </div>
                        {props.fetchingGenres}
                        {!props.fetchingGenres
                            ? (
                                <div className="content-body">
                                    <h3 className="content-body-title">Modify genre</h3>
                                    <Genres album={props.selectedAlbum} suggestions={genreSuggestions?.suggested_genres ?? []} />
                                </div>
                            )
                            :(
                                <div className="content-body">
                                    <h3 className="content-body-title">Loading...</h3>
                                </div>
                            )
                        }
                    </main>
                )
            }
          </div>
    )
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    fetchingAlbums: state.fetchingAlbums,
    fetchingGenres: state.fetchingGenres,
    selectedAlbum: state.selectedAlbum
})

const mapDispatchToProps = (dispatch) => ({
    loadAlbums: (data) => { dispatch(loadAlbums(data)) },
    toggleFetchingGenres: (state) => { dispatch(toggleFetchingGenres(state)) }
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
