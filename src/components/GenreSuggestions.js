import React from 'react'

import GenreItem from './GenreItem'
import image from '../images/candlestick-holder.svg'


const GenreSuggestions = ({suggestions, albumId}) => (
    <div id="genrelist" className={suggestions ? "list" : "content-empty"}>
        { albumId !== null
              ? (
                    suggestions.map((suggestion, idx) => (
                        <GenreItem key={idx}
                                   genre={suggestion} />
                    ))
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