import React from 'react'
import { connect } from 'react-redux'

import { GenreItem, GenreItemButton, GenreItemInput }  from './GenreItem'
import { updateAlbum } from '../actions'
import image from '../images/candlestick-holder.svg'

import GirandoleClient from '../GirandoleClient'

const girandoleClient = new GirandoleClient()


const Genres_ = (props) => (
    <div id="genrelist" className={props.album ? "list" : "content-empty"}>
        { props.album != null
              ? (
                    <div>
                        <h3>Current genre</h3>
                            <GenreItem genre={props.album.genre} />
                        <h3>Suggestions</h3>
                        {props.suggestions.map((suggestion, idx) => (
                            <GenreItemButton key={idx}
                                             genre={suggestion} />
                        ))}
                        <h3>Custom</h3>
                        <div>
                            <GenreItemInput />
                        </div>
                        <button onClick={(e) => props.onClickHandler(e, props.album, props.selectedGenre)}>Update</button>
                    </div>
              )
              : (
                    <div>
                        <img alt="" src={image} style={{maxWidth: '100%'}} />
                        <p style={{marginTop: '-3rem', textAlign: 'center', marginBottom: 0}}>Select an album in the list on the left to retrieve its most popular genre suggestions.</p>
                    </div>
              )
          }
    </div>
)
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