import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import GirandoleClient from '../GirandoleClient'
import AlbumList from './AlbumList'
import AppContent from './AppContent'
import AlbumLoader from './AlbumLoader'
import AlbumFilter from './AlbumFilter'
import { loadAlbums, toggleFetchingGenres, toggleSettingGenre, updateAlbum } from '../actions'

import { app } from '../styles/modules/app.module.css'
import { sidebar } from '../styles/modules/sidebar.module.css'

const girandoleClient = new GirandoleClient()

const App = (props) => {
    const [genreSuggestions, setGenreSuggestions] = useState(null)
    const { selectedAlbum, selectedGenre } = props

    useEffect(() => {
        girandoleClient.getAlbums()
        .then(data => props.loadAlbums(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        if (selectedAlbum !== null) {
            let isMounted = true

            girandoleClient.getSuggestedGenres(selectedAlbum.id)
                .then(data => {
                    if (isMounted) {
                        setGenreSuggestions(data)
                        props.toggleFetchingGenres(false)
                        props.toggleSettingGenre(false)
                    }
                })

            // Cleanup when unmounted
            return () => isMounted = false
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedAlbum])

    useEffect(() => {
        if (selectedGenre !== null && selectedAlbum !== null) {
            let isMounted = true

            girandoleClient.updateGenre(selectedAlbum.id, selectedGenre)
                .then(updatedAlbum => {
                    if (isMounted) {
                        props.updateAlbum(updatedAlbum)
                    }
                })

            // Cleanup when unmounted
            return () => isMounted = false
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedGenre])

    return (
        <div className={app}>
            <div className={sidebar}>
                <AlbumFilter />
                { !props.fetchingAlbums
                    ? (<AlbumList albums={props.albums ?? []} />)
                    : (<AlbumLoader />)
                }
            </div>
            <AppContent
                selectedAlbum={props.selectedAlbum}
                settingGenre={props.settingGenre}
                fetchingGenres={props.fetchingGenres}
                genreSuggestions={genreSuggestions}
                />
          </div>
    )
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    fetchingAlbums: state.fetchingAlbums,
    fetchingGenres: state.fetchingGenres,
    settingGenre: state.settingGenre,
    selectedAlbum: state.selectedAlbum,
    selectedGenre: state.selectedGenre
})

const mapDispatchToProps = (dispatch) => ({
    loadAlbums: (data) => { dispatch(loadAlbums(data)) },
    toggleFetchingGenres: (state) => { dispatch(toggleFetchingGenres(state)) },
    toggleSettingGenre: (state) => { dispatch(toggleSettingGenre(state)) },
    updateAlbum: (updatedAlbum) => { dispatch(updateAlbum(updatedAlbum)) }
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
