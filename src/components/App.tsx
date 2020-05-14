import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AlbumList from './AlbumList'
import Albums from './Albums'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import image from '../images/candlestick-holder.svg'
import { filterAlbums } from '../actions'


type Props = { keyDownHandler: any }

const App: React.FC<Props> = ({keyDownHandler}) => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {  /* This is better. Now there's only two calls.
    Yet, it should be one, right? So there's fixing to do still. */
        Albums().then(data => albums.length > 0 ? null : setAlbums(data))
    })

    return (
        <div>
            <div className="header">
                <div className="form-group">
                    <label htmlFor="album" className="form-label form-label-search">
                        <span>Filter album</span>
                    </label>
                <div className="input-group">
                    <span className="input-group-search">
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                        <input id="album" name="album" list="albumlist" type="text" className="form-input form-search" onKeyUp={ keyDownHandler } />
                </div>
            </div>
            <AlbumList albums={albums} />
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        keyDownHandler: (e: any) => {
            dispatch(filterAlbums(e.target.value))
        }
    }
}

export default connect(null, mapDispatchToProps)(App)
