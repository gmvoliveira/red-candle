import React from 'react'
import { connect } from 'react-redux'
import Album from './Album'


const albumFilter = (album, query) => {
    if (query.length < 2) return true

    const [field, term] = query.split('::')

    if (!term) return true

    return String(album[field]) === term
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