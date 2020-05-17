import React from 'react'
import { connect } from 'react-redux'
import Album from './Album'


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


const AlbumList = ({albums, filterText}) => (
    <nav className="nav">
        {albums
            .filter((album) => albumFilter(album, filterText))
            .map((album) =>
                <Album key={album.id} album={album} />
        )}
    </nav>
)

const mapStateToProps = (state) => {
    return {
        filterText: state.albumFilter
    }
}

export default connect(mapStateToProps)(AlbumList)
