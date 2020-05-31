import React from 'react'
import { connect } from 'react-redux'

import { filterAlbums } from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { formGroup } from '../styles/modules/formGroup.module.css'
import { formSearch } from '../styles/modules/formInput.module.css'
import { formLabelFloat } from '../styles/modules/formLabel.module.css'
import { inputGroup, inputGroupFloat } from '../styles/modules/inputGroup.module.css'

const AlbumFilter = ({keyUpHandler}) => {
    return (
        <div className={formGroup}>
            <label htmlFor="filterAlbums" className={formLabelFloat}>
                <span>Filter album</span>
            </label>
            <div className={inputGroup}>
                <span className={inputGroupFloat}>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <input id="filterAlbums" name="filterAlbums" type="text"
                    className={formSearch}
                    onKeyUp={ keyUpHandler } />
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        keyUpHandler: (e) => {
            dispatch(filterAlbums(e.target.value))
        }
    }
}


export default connect(null, mapDispatchToProps)(AlbumFilter)
