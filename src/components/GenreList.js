import React from 'react'

import image from '../images/candlestick-holder.svg'


const GenreSuggestion = ({suggestion}) =>
    <div className="list-item">{suggestion}</div>


const GenreSuggestionList = ({suggestions}) => (
    <div id="genrelist" className={suggestions ? "list" : "content-empty"}>
        { suggestions
              ? (
                    suggestions.map((suggestion, idx) => <GenreSuggestion key={idx} suggestion={suggestion} />)
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


export default GenreSuggestionList