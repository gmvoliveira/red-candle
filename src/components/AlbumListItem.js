import React from 'react'
import { connect } from 'react-redux'

import { selectAlbum } from '../actions'
import AlbumCover from './AlbumCover'

import { navItem, navItemImage, navItemContent, navItemTitle, navItemSubtitle } from '../styles/modules/navItem.module.css'

const AlbumListItem = (props) => {
    const active = props.selectedAlbum === props.album.album

    return (
        <button className={`${navItem} ${active ? 'active': ''}`} onClick={ (e) => props.onClickHandler(e, props.album) }>
            <div className={navItemImage}>
                {AlbumCover(props.album.id)}
            </div>
            <div className={navItemContent}>
                <span className={navItemTitle}>{props.album.albumartist}</span>
                <span className={navItemSubtitle}>{props.album.album} - {props.album.year}</span>
            </div>
        </button>
    )
}

const mapStateToProps = (state) => ({
    selectedAlbum: state.selectedAlbum?.album
})

const mapDispatchToProps = (dispatch) => {
    return {
        onClickHandler: (e, album) => {
            dispatch(selectAlbum(album))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumListItem)