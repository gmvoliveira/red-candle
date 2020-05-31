import React, { useState } from "react";
import { connect } from 'react-redux'

import { GenreItemButton, GenreItemInput }  from './GenreItem'
import { updateAlbum } from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { listItemAlt } from '../styles/modules/listItem.module.css'
import { inputGroupCustomGenre } from '../styles/modules/inputGroup.module.css'
import { buttonIcon } from '../styles/modules/button.module.css'
import '../styles/objects/collapse.css'

import GirandoleClient from '../GirandoleClient'

const girandoleClient = new GirandoleClient()


const Genres_ = (props) => {
    const [collapseActive, setcollapseActive] = useState(false);

    return (
        <div id="genrelist">
            {props.suggestions.map((suggestion, idx) => (
                <GenreItemButton key={idx} genre={suggestion} />
            ))}
            
            <div className={listItemAlt}>
                <div className="collapse-toggle">
                    <span>Custom</span>
                    <button className={buttonIcon} type="button" onClick={() => setcollapseActive(!collapseActive)}>
                        <FontAwesomeIcon icon={collapseActive ? faMinus : faPlus} />
                    </button>
                </div>
                <div className={`collapse ${collapseActive && 'show'}`}>
                    <div className={inputGroupCustomGenre}>
                        <GenreItemInput />
                        <button className={buttonIcon} type="button" onClick={(e) => props.onClickHandler(e, props.album, props.selectedGenre)}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedGenre: state.selectedGenre
})

const mapDispatchToProps = (dispatch) => ({
    onClickHandler: async (e, album, genre) => {
        if (album && genre) {
            const updatedAlbum = (await girandoleClient.updateGenre(album.id, genre))[0]
            dispatch(updateAlbum(updatedAlbum))
        }
    }
})
const Genres = connect(mapStateToProps, mapDispatchToProps)(Genres_)

export default Genres