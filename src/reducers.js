import { createReducer } from './utils'

const initialState = {
    albumFilter: '',
    selectedAlbum: null,
    selectedGenre: null
}

export default createReducer(initialState, {
    FILTER_ALBUMS: (state, action) => ({
        ...state,
        albumFilter: action.payload.filterText
    }),
    SELECT_ALBUM: (state, action) => ({
        ...state,
        selectedAlbum: action.payload.album
    }),
    SELECT_GENRE: (state, action) => ({
        ...state,
        selectedGenre: action.payload.genre
    })
})
