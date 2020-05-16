import React from 'react'
import { connect } from 'react-redux'
import Album from './Album'

const AlbumList = ({albums, filterText}) => (
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

export default connect(mapStateToProps)(AlbumList)