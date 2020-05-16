import React, { useEffect, useState } from 'react'

import AlbumList from './AlbumList'
import Albums from './Albums'
import AlbumFilter from './AlbumFilter'

import './App.css'
import image from '../images/candlestick-holder.svg'


const App: React.FC = () => {
    const [albums, setAlbums] = useState(null)

    useEffect(() => {
        if (albums === null) {
            Albums().then(data => setAlbums(data))
        }
    })

    return (
        <div>
            <div className="header">
                <AlbumFilter />
                <AlbumList albums={albums ?? []} />
            </div>
            <main className="content">
                <h2>Genres</h2>
                <div id="genrelist-empty" className="content-empty">
                    <img src={image} style={{maxWidth: '100%'}} alt="No album selected" />
                    <p style={{marginTop: '-3rem', textAlign: 'center', marginBottom: '0'}}>Selecteer in de lijst aan de linkerkant een album om de meestgebruikte genres voor een album op te halen.</p>
                </div>
                <div id="genrelist" className="list"></div>
            </main>
          </div>
    )
}


export default App
