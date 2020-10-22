import React, { useState } from "react";
import { connect } from 'react-redux'

import { GenreListItem, GenreListItemCustom }  from './GenreListItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { listItemActive, listItemInactive } from '../styles/modules/listItem.module.css'
import { buttonIcon } from '../styles/modules/button.module.css'
import '../styles/objects/collapse.css'

const Genres = (props) => {
    const [collapseActive, setcollapseActive] = useState(false);

    if (!props.suggestions.length) {
        return (
            <div>Something went wrong. Please try again!</div>
        )
    } else {
        return (
            <div id="genrelist">
                {props.suggestions.map((suggestion, idx) => (
                    <GenreListItem key={idx} genre={suggestion} settingGenre={props.settingGenre} currentGenre={props.selectedGenre || props.album.genre} />
                ))}
                
                {/* Collapse control around custom genre */}
                <div className={collapseActive ? listItemActive : listItemInactive}>
                    <div className="collapse-toggle">
                        <span>Custom</span>
                        <button className={buttonIcon} type="button" onClick={() => setcollapseActive(!collapseActive)}>
                            <FontAwesomeIcon icon={collapseActive ? faMinus : faPlus} />
                        </button>
                    </div>
                    <div className={`collapse ${collapseActive && 'show'}`}>
                        <GenreListItemCustom />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedGenre: state.selectedGenre
})

const GenreList = connect(mapStateToProps, null)(Genres)

export default GenreList