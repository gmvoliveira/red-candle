import React from 'react'

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 'calc(var(--shape-border-radius) - 2)'
}

const AlbumCover = albumId => {
    try{
        const src = require(`http://192.168.1.80:8080/album/${albumId}/art`)

        return <img style={imageStyle} alt="Album Cover" src={src} />
    }
    catch(err){
        //Do whatever you want when the image failed to load here
    }
}

export default AlbumCover