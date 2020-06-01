import React from 'react'
import { connect } from 'react-redux'
import { selectGenre} from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { listItem } from '../styles/modules/listItem.module.css'
import { buttonIcon } from '../styles/modules/button.module.css'
import { badge, badgeSelected } from '../styles/modules/badge.module.css'
import { formInput } from '../styles/modules/formInput.module.css'

const mapDispatchToProps = (dispatch) => ({
    onClickHandler: (e, genre) => {
        dispatch(selectGenre(genre))
    }
})

const GenreItem = ({genre}) => (
    <div className={badge}>{genre}</div>
)

const GenreItemButton_ = ({genre, onClickHandler, selectedGenre}) => {
    // TODO: Should be the genre that is the current genre of selected album
    let isSelected = selectedGenre === genre;

    return (
        <div className={listItem}>
            <span>{genre}</span>
            <button className={buttonIcon} type="button" disabled={isSelected} onClick={ (e) => onClickHandler(e, genre) }>
                {isSelected && <div className={badgeSelected}>Selected</div>}
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}
const GenreItemButton = connect(null, mapDispatchToProps)(GenreItemButton_)


const GenreItemInput_ = ({genre, onClickHandler}) => (
    <input className={formInput} type="text" placeholder="Enter a custom genre" onChange={ (e) => onClickHandler(e, e.target.value) } />
)
const GenreItemInput = connect(null, mapDispatchToProps)(GenreItemInput_)


export { GenreItem, GenreItemInput, GenreItemButton }