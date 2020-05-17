import React from 'react'
import { connect } from 'react-redux'

import { selectGenre } from '../actions'


const GenreItem = ({genre, onClickHandler}) => (
    <button className="list-item" onClick={(e) => onClickHandler(e, genre)}>
        {genre}
    </button>
)

const mapDispatchToProps = (dispatch) => ({
    onClickHandler: (e, genre) => {
        dispatch(selectGenre(genre))
    }
})

export default connect(null, mapDispatchToProps)(GenreItem)
