import React from 'react'
import { connect } from 'react-redux'

import { filterAlbums } from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'




type Props = {
    keyDownHandler: (event: React.KeyboardEvent) => void
}


const AlbumFilter: React.FC<Props> = ({keyDownHandler}) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="album" className="form-label form-label-search">
                    <span>Filter album</span>
                </label>
            </div>
            <div className="input-group">
                <span className="input-group-search">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input id="album" name="album" list="albumlist" type="text" className="form-input form-search" onKeyUp={ keyDownHandler } />
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        keyDownHandler: (e: any) => {
            dispatch(filterAlbums(e.target.value))
        }
    }
}


export default connect(null, mapDispatchToProps)(AlbumFilter)
