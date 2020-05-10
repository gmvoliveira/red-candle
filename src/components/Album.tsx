import React from 'react';

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '6px'
}

const Album = (props: any) => {
    const { album } = props

    return (
        <button className="nav-item" onClick={ () => /*GenreList(album.id)*/null }>
            <div className="nav-item-image">
                <img style={imageStyle} alt="Album Cover" src={`http://83.160.209.236:8080/album/${album.id}/art`} />
            </div>
            <div className="nav-item-content">
                <h3 className="nav-item-title">{album.albumartist}</h3>
                <span className="nav-item-subtitle">{album.album} - {album.year}</span>
            </div>
        </button>
    );
}

export default Album;