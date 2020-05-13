import React from 'react'
import { connect } from 'react-redux'
import Album from './Album'
import AlbumType from '../types/Album'
// import GenreList from './GenreList'

type Props = {
    albums: Array<AlbumType>,
    filterText: string
}

const AlbumList_: React.FC<Props> = ({albums, filterText}) => (
    <nav className="nav">
        {albums
            .filter((album: AlbumType) =>
                filterText.length >= 2
                    ? album.album.includes(filterText)
                    : true
            )
            .map((album: AlbumType) =>
                <Album key={album.id} album={album} />
        )}
    </nav>
)

const mapStateToProps = state => {
    return {
        filterText: state.albumFilter
    }
}

const AlbumList = connect(mapStateToProps)(AlbumList_)

export default AlbumList
