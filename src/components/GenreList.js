import React from 'react'
import Genres from './Genres'

import image from '../images/candlestick-holder.svg'


const GenreSuggestion = ({suggestion}) =>
    <div className="list-item">{suggestion}</div>


const GenreSuggestionList = ({suggestions}) =>
    suggestions.map((suggestion, idx) => <GenreSuggestion key={idx} suggestion={suggestion} />)


export default GenreSuggestionList