import React from 'react'
import GenreList from './GenreList'
import AlbumCover from './AlbumCover'
import GenreBadge  from './GenreBadge'

import image from '../images/candlestick-holder.svg'
import MessageIllustration from './MessageIllustration'
import '../styles/objects/content.css'

const AppContent = (props) => {

    if (!props.selectedAlbum) {
        return (
            <main className="content">
                <MessageIllustration
                url={image}
                text="Select an album in the list on the left to retrieve its most popular genre suggestions."
                altText="No album selected" />
            </main>
        )
    } else {
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
                            <GenreBadge genre={!props.settingGenre ? props.selectedAlbum.genre : 'Updating...'} />
                        </div>
                    </div>
                </div>
                
                <div className="content-body">
                    <h3 className="content-body-title">
                        {!props.fetchingGenres ?
                            props.genreSuggestions?.suggested_genres.length ? 
                                'Modify genre'
                                : 'Oops! We couldn\'t find any genres'
                            : 'Loading...'}
                    </h3>
                    {!props.fetchingGenres &&
                        <GenreList
                            album={props.selectedAlbum}
                            settingGenre={props.settingGenre}
                            suggestions={props.genreSuggestions?.suggested_genres ?? []} />
                    }
                </div>
            </main>
        )
    }
}

export default AppContent