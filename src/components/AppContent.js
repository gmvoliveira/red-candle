import React from 'react'
import GenreList from './GenreList'
import AlbumCover from './AlbumCover'
import GenreBadge  from './GenreBadge'

import image from '../images/candlestick-holder.svg'
import MessageIllustration from './MessageIllustration'
import { buttonPrimary } from '../styles/modules/button.module.css'
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
        const rymUrl = `https://rateyourmusic.com/search?searchtype=l&searchterm=${props.selectedAlbum.albumartist.replace(' ', '+')}+${props.selectedAlbum.album.replace(' ', '+')}`

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

                            <a href={rymUrl} target="_blank" rel="noopener noreferrer" className={buttonPrimary} style={{'marginLeft': 'auto'}}>Find on RYM</a>
                        </div>
                    </div>
                </div>
                
                <div className="content-body">
                    <h3 className="content-body-title">
                        {props.fetchingGenres
                            ? 'Loading...'
                            : props.genreSuggestions?.suggested_genres.length
                                ? 'Modify genre'
                                : 'Oops! We couldn\'t find any genres'
                        }
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