import React from 'react';
import Albums from './Albums'
import Album from './Album'
//import GenreList from './GenreList'

function AlbumList() {
    let albums = {}
    
    async function getAlbums() {
        const albumlist: any = await Albums()
        albums = albumlist
    }
    getAlbums()

    const navItems = Object.values(albums).map((album) => 
        <Album album={album} />
    )
    
    return (
        <nav className="nav">
            {navItems}
        </nav>
    )
}

export default AlbumList