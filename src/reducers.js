import { createReducer } from './utils'

const initialState = {
    albumFilter: '',
    albums: null,
    selectedAlbum: null,
    selectedGenre: null
}

export default createReducer(initialState, {
    LOAD_ALBUMS: (state, action) => ({
        ...state,
        albums: action.payload.albums
    }),
    UPDATE_ALBUM: (state, action) => ({
        ...state,
        selectedAlbum: action.payload.album,
        albums: state.albums.map(a => a.id === action.payload.album.id ? action.payload.album : a)
    }),
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
