import React from 'react';
import AlbumList from './AlbumList'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import image from '../images/candlestick-holder.svg';

const App: React.FC = () => {
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
                  <input id="album" name="album" list="albumlist" type="text" className="form-input form-search" />
              </div>
          </div>
          <AlbumList />
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
  );
}

export default App;
