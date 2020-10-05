import React, { useState } from "react";
import { connect } from 'react-redux'

import { GenreItem, GenreItemCustom }  from './GenreItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { listItemActive, listItemInactive } from '../styles/modules/listItem.module.css'
import { buttonIcon } from '../styles/modules/button.module.css'
import '../styles/objects/collapse.css'

const Genres_ = (props) => {
    const [collapseActive, setcollapseActive] = useState(false);
    
    return (
        <div id="genrelist">
            {props.suggestions.map((suggestion, idx) => (
                <GenreItem key={idx} genre={suggestion} settingGenre={props.settingGenre} selectedGenre={props.selectedGenre || props.album.genre} />
            ))}
            
            <div className={collapseActive ? listItemActive : listItemInactive}>
                <div className="collapse-toggle">
                    <span>Custom</span>
                    <button className={buttonIcon} type="button" onClick={() => setcollapseActive(!collapseActive)}>
                        <FontAwesomeIcon icon={collapseActive ? faMinus : faPlus} />
                    </button>
                </div>
                <div className={`collapse ${collapseActive && 'show'}`}>
                    <GenreItemCustom />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedGenre: state.selectedGenre
})

const Genres = connect(mapStateToProps, null)(Genres_)

export default Genres