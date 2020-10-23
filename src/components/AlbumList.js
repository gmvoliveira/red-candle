import React from 'react'
import { connect } from 'react-redux'
import AlbumListItem from './AlbumListItem'

import image from '../images/album.svg'
import MessageIllustration from './MessageIllustration'
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

const sortArray = (array, sortProperty) => {
    function compareProperty(a, b) {
        if ( a[sortProperty] > b[sortProperty] ){
            return -1;
          }
          if ( a[sortProperty] < b[sortProperty] ){
            return 1;
          }
          return 0;
    }

    const sortedArray = array.sort(compareProperty)

    return sortedArray
}

const AlbumList = ({ albums, filterText, selectedAlbum }) => {
    const filteredAlbums = albums.filter((album) => albumFilter(album, filterText))
    const sortedAlbums = sortArray(filteredAlbums, 'added')

    const NoAlbumsMessage =
        <MessageIllustration
            url={image}
            size={200}
            altText="No albums found"
            text="Couldn't find any albums. Please try again!" />

    return (
        <nav className="nav">
            { sortedAlbums.length === 0 ? (NoAlbumsMessage)
                : sortedAlbums.map((album, i) =>
                    <AlbumListItem key={album.id} album={album} selectedAlbum={selectedAlbum === album.id} />
                )
            }
        </nav>
    )
}

const mapStateToProps = (state) => ({
    filterText: state.albumFilter,
    selectedAlbum: state.selectedAlbum?.id
})

export default connect(mapStateToProps)(AlbumList)
