import React from 'react'
import { connect } from 'react-redux'

import { selectAlbum } from '../actions'
import AlbumCover from './AlbumCover'

import { navItem, navItemImage, navItemContent, navItemTitle, navItemSubtitle } from '../styles/modules/navItem.module.css'

const AlbumListItem = (props) => {
    const active = props.selectedAlbum === props.album.id
    const navClass = `${navItem} ${active ? 'active': ''}`
    const title = `${props.album.album} (${props.album.year})`
    const subTitle = props.album.albumartist

    const handleClick = (e) => {
        props.onClickHandler(e, props.album)
    }

    return (
        <button className={navClass} onClick={handleClick} >
            <div className={navItemImage}>
                <AlbumCover album={props.album} />
            </div>
            <div className={navItemContent}>
                <span className={navItemTitle} title={title}>{title}</span>
                <span className={navItemSubtitle} title={subTitle}>{subTitle}</span>
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
