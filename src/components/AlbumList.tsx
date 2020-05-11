import React, { useState, useEffect } from 'react';
import Albums from './Albums'
import Album from './Album'
import AlbumType from '../types/Album'
//import GenreList from './GenreList'

type Props = { albums: Array<AlbumType> }

// const AlbumList: React.FC<Props> = ({albums}) => {
const AlbumList: React.FC = () => {
    const [albums, setAlbums] = useState([])  // TODO: Move out.

    // TODO: Move out.
    useEffect(() => {
        Albums().then(results => {
            setAlbums(results)
        })
    }, [])

    const navItems = albums.map((album: AlbumType) =>
        <Album key={album.id} album={album} />
    )

    return (
        <nav className="nav">
            {navItems}
        </nav>
    )
}

export default AlbumList
