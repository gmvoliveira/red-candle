import React from 'react'

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 'calc(var(--shape-border-radius) - 2)'
}

const AlbumCover = albumId => {
    try{
        const src = require(`${process.env.REACT_APP_GIRANDOLE_BASE_URL}/album/${albumId}/art`)

        return <img style={imageStyle} alt="Album Cover" src={src} />
    }
    catch(err){
        //Do whatever you want when the image failed to load here
    }
}

export default AlbumCover
