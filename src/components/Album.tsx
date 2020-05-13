import React from 'react'
import AlbumType from '../types/Album'

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '6px'
}

type Props = {
    album: AlbumType,
}

const Album: React.FC<Props> = ({album}) => (
    <button className="nav-item" onClick={ () => console.log(album.id) }>
        <div className="nav-item-image">
            <img style={imageStyle} alt="Album Cover" src={`http://83.160.209.236:8080/album/${album.id}/art`} />
        </div>
        <div className="nav-item-content">
            <h3 className="nav-item-title">{album.albumartist}</h3>
            <span className="nav-item-subtitle">{album.album} - {album.year}</span>
        </div>
    </button>
)

export default Album
