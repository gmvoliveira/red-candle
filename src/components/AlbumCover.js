import React from 'react'

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 'calc(var(--shape-border-radius) - 2px)'
}


const AlbumCover = ({album}) => {
    return (album.artpath ?
        <img style={imageStyle}
             alt="Album Cover"
             src={`${process.env.REACT_APP_GIRANDOLE_BASE_URL}/album/${album.id}/art`} />
        : '')
}

export default AlbumCover
