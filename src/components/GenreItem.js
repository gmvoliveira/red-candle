import React from 'react'
import { connect } from 'react-redux'
import { selectGenre} from '../actions'


const mapDispatchToProps = (dispatch) => ({
    onClickHandler: (e, genre) => {
        dispatch(selectGenre(genre))
    }
})


const GenreItem = ({genre}) => (
    <div className="list-item">{genre}</div>
)


const GenreItemButton_ = ({genre, onClickHandler}) => (
    <button className="nav-item" onClick={ (e) => onClickHandler(e, genre) }>{genre}</button>
)
const GenreItemButton = connect(null, mapDispatchToProps)(GenreItemButton_)


const GenreItemInput_ = ({genre, onClickHandler}) => (
    <input className="list-item" type="text" onChange={ (e) => onClickHandler(e, e.target.value) } />
)
const GenreItemInput = connect(null, mapDispatchToProps)(GenreItemInput_)


export { GenreItem, GenreItemInput, GenreItemButton }