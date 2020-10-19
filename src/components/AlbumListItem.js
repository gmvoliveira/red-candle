import React from 'react'
import { connect } from 'react-redux'

import { selectAlbum } from '../actions'
import AlbumCover from './AlbumCover'

import { navItem, navItemImage, navItemContent, navItemTitle, navItemSubtitle } from '../styles/modules/navItem.module.css'

const AlbumListItem = (props) => {
    const active = props.selectedAlbum === props.album.id

    const handleClick = (e) => {
        props.onClickHandler(e, props.album)
    }

    return (
        <button className={`${navItem} ${active ? 'active': ''}`} onClick={handleClick} >
            <div className={navItemImage}>
                <AlbumCover album={props.album} />
            </div>
            <div className={navItemContent}>
                <span className={navItemTitle} title={props.album.albumartist}>{props.album.albumartist}</span>
                <span className={navItemSubtitle} title={`${props.album.album} - ${props.album.year}`}>{props.album.album} - {props.album.year}</span>
            </div>
        </button>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickHandler: (e, album) => {
            dispatch(selectAlbum(album))
        }
    }
}

export default connect(null, mapDispatchToProps)(AlbumListItem)
