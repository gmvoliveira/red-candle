import React from 'react'

import GenreItem from './GenreItem'
import GenreSuggestion from './GenreSuggestion'
import image from '../images/candlestick-holder.svg'


const GenreSuggestions = ({suggestions, album}) => (
    <div id="genrelist" className={suggestions ? "list" : "content-empty"}>
        { album != null
              ? (
                    <div>
                        <h3>Current genre</h3>
                            <GenreItem genre={album.genre} />
                        <h3>Suggested genres</h3>
                            {suggestions.map((suggestion, idx) => (
                                <GenreSuggestion key={idx}
                                                 suggestion={suggestion} />
                            ))}
                    </div>
              )
              : (
                    <div>
                        <img alt="" src={image} style={{maxWidth: '100%'}} />
                        <p style={{marginTop: '-3rem', textAlign: 'center', marginBottom: 0}}>Selecteer in de lijst aan de linkerkant een album om de meestgebruikte genres voor een album op te halen.</p>
                    </div>
              )
          }
    </div>
)


export default GenreSuggestions