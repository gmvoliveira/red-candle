import React, { useState } from 'react'
import { connect } from 'react-redux'
import { selectGenre} from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { badgeSelected } from '../styles/modules/badge.module.css'
import { buttonIcon } from '../styles/modules/button.module.css'
import { formInput } from '../styles/modules/formInput.module.css'
import { inputGroupCustomGenre } from '../styles/modules/inputGroup.module.css'
import { listItem } from '../styles/modules/listItem.module.css'

const mapDispatchToProps = (dispatch) => ({
    onClickHandler: (e, genre) => {
        dispatch(selectGenre(genre))
    }
})

const Item_ = ({genre, onClickHandler, settingGenre, currentGenre}) => {
    // TODO: Should be the genre that is the current genre of selected album
    let isSelected = currentGenre === genre;

    return (
        <div className={listItem}>
            <span>{genre}</span>
            <button className={buttonIcon} type="button" disabled={isSelected} onClick={ (e) => onClickHandler(e, genre) }>
                {isSelected && <div className={badgeSelected}>{settingGenre ? 'Updating...' : 'Selected'}</div>}
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}
const GenreListItem = connect(null, mapDispatchToProps)(Item_)


const Custom_ = ({genre, onClickHandler}) => {
    const [customGenre, setCustomGenre] = useState('');

    return (
        <div className={inputGroupCustomGenre}>
            <input className={formInput} type="text" placeholder="Enter a custom genre" value={customGenre} onChange={(e) => setCustomGenre(e.target.value) } />
            <button className={buttonIcon} type="button" onClick={ (e) => onClickHandler(e, customGenre) }>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}
const GenreListItemCustom = connect(null, mapDispatchToProps)(Custom_)


export { GenreListItem, GenreListItemCustom }