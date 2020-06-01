import React from 'react'
import { connect } from 'react-redux'
import AlbumListItem from './AlbumListItem'

import image from '../images/album.svg'
import MessageEmpty from './MessageEmpty'
import '../styles/objects/nav.css'

const albumFilter = (album, query) => {
    const [field, term] = query.split('::')

    if (term === undefined && field.length >= 2) {
        return album.album
            .toLowerCase()
            .includes(field.toLowerCase())
    }

    if (album.hasOwnProperty(field) && term.length >= 2) {
        return String(album[field])
            .toLowerCase()
            .includes(term.toLowerCase())
    }

    return true
}


const AlbumList = ({albums, filterText}) => {
    const _albums = albums.filter((album) => albumFilter(album, filterText));

    return (
        <nav className="nav">
            { _albums.length
                ? _albums.map((album) =>
                        <AlbumListItem key={album.id} album={album} />
                    )
                : (
                    <MessageEmpty 
                        url={image}
                        text="Couldn't find any albums with those filter terms. Please try again with another term."
                        altText="No albums found"
                        size={200} />
                )
            }
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        filterText: state.albumFilter
    }
}

export default connect(mapStateToProps)(AlbumList)
