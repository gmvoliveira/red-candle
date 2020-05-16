import React from 'react'
import { connect } from 'react-redux'

import { selectGenre } from '../actions'

import image from '../images/candlestick-holder.svg'


const GenreSuggestion_ = ({suggestion, onClickHandler}) => (
    <div className="list-item" onClick={(e) => onClickHandler(e, suggestion)}>
        {suggestion}
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    onClickHandler: (e, suggestion) => {
        dispatch(selectGenre(suggestion))
    }
})

const GenreSuggestion = connect(null, mapDispatchToProps)(GenreSuggestion_)



// const GenreCustomEntry = () => (
    // <GenreSuggestion_
// )


const GenreSuggestionList = ({suggestions, albumId}) => (
    <div id="genrelist" className={suggestions ? "list" : "content-empty"}>
        { albumId !== null
              ? (
                    suggestions.map((suggestion, idx) => (
                        <GenreSuggestion key={idx}
                                         suggestion={suggestion} />
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


export default GenreSuggestionList