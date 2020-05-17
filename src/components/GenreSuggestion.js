import React from 'react'
import { connect } from 'react-redux'

import { selectGenre } from '../actions'
import GenreItem from './GenreItem'


const GenreSuggestion = ({suggestion, onClickHandler}) => (
	<div onClick={(e) => onClickHandler(e, suggestion)}>
		<GenreItem genre={suggestion} clickable={true} />
	</div>
)

const mapDispatchToProps = (dispatch) => ({
    onClickHandler: (e, genre) => {
        dispatch(selectGenre(genre))
    }
})

export default connect(null, mapDispatchToProps)(GenreSuggestion)
