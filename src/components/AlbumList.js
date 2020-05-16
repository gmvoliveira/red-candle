import React from 'react'
import { connect } from 'react-redux'
import Album from './Album'
import GenreList from './GenreList'

const AlbumList_ = ({albums, filterText}) => (
    <nav className="nav">
        {albums
            .filter((album) =>
                filterText.length >= 2
                    ? album.album.includes(filterText)
                    : true
            )
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

const AlbumList = connect(mapStateToProps)(AlbumList_)

export default AlbumList
