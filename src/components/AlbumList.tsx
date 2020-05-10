import React, { useState, useEffect } from 'react';
import Albums from './Albums'
import Album from './Album'
//import GenreList from './GenreList'

function AlbumList() {
    const [albums, setAlbums] = useState([])
    
    useEffect(() => {
        Albums().then(results => {
            setAlbums(results)
        })
    }, [])

    const navItems = albums.map((album: any) =>
        <Album key={album.id} album={album} />
    )
    
    return (
        <nav className="nav">
            {navItems}
        </nav>
    )
}

export default AlbumList