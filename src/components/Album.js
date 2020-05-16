import React from 'react'
import { connect } from 'react-redux'

import { selectAlbum } from '../actions'

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '6px'
}

const Album = ({album, onClickHandler}) => (
    <button className="nav-item" onClick={ (e) => onClickHandler(e, album) }>
        <div className="nav-item-image">
            <img style={imageStyle} alt="Album Cover" src={`http://83.160.209.236:8080/album/${album.id}/art`} />
        </div>
        <div className="nav-item-content">
            <h3 className="nav-item-title">{album.albumartist}</h3>
            <span className="nav-item-subtitle">{album.album} - {album.year}</span>
        </div>
    </button>
)

const mapDispatchToProps = (dispatch) => {
    return {
        onClickHandler: (e, album) => {
            dispatch(selectAlbum(album))
        }
    }
}

export default connect(null, mapDispatchToProps)(Album)