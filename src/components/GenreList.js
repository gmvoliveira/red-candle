import React from 'react'


const GenreSuggestion = ({suggestion}) =>
    <div className="list-item">{suggestion}</div>


const GenreSuggestionList = ({suggestions}) =>
    suggestions.map((suggestion, idx) => <GenreSuggestion key={idx} suggestion={suggestion} />)


export default GenreSuggestionList