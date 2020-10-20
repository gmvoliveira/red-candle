import React from 'react'
import Genres from './Genres'
import AlbumCover from './AlbumCover'
import { GenreItemBadge }  from './GenreItem'

const AppContent = (props) => {
    return (
        <main className="content">
            <div className="content-header">
                <div className="content-header-image">
                    <AlbumCover album={props.selectedAlbum} />
                </div>
                <div className="content-header-body">
                    <h2 className="content-header-title">{props.selectedAlbum.album} ({props.selectedAlbum.year})</h2>
                    <h3 className="content-header-subtitle">{props.selectedAlbum.albumartist}</h3>
                    <div className="content-header-badges">
                        <GenreItemBadge genre={!props.settingGenre ? props.selectedAlbum.genre : 'Updating...'} />
                    </div>
                </div>
            </div>
            
            <div className="content-body">
                <h3 className="content-body-title">{!props.fetchingGenres ? 'Modify genre' : 'Loading...'}</h3>
                {!props.fetchingGenres &&
                    <Genres
                        album={props.selectedAlbum}
                        settingGenre={props.settingGenre}
                        suggestions={props.genreSuggestions?.suggested_genres ?? []} />
                }
            </div>
        </main>
    )
}

export default AppContent