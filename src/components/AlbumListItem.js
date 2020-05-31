import React from 'react'
import { connect } from 'react-redux'

import { selectAlbum } from '../actions'
import AlbumCover from './AlbumCover'

import { navItem, navItemImage, navItemContent, navItemTitle, navItemSubtitle } from '../styles/modules/navItem.module.css'

const AlbumListItem = ({album, onClickHandler}) => (
    <button className={navItem} onClick={ (e) => onClickHandler(e, album) }>
        <div className={navItemImage}>
            {AlbumCover(album.id)}
        </div>
        <div className={navItemContent}>
            <span className={navItemTitle}>{album.albumartist}</span>
            <span className={navItemSubtitle}>{album.album} - {album.year}</span>
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

export default connect(null, mapDispatchToProps)(AlbumListItem)