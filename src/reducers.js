const initialState = {
    albumFilter: '',
    selectedAlbum: null
}

const createReducer = (initialState, handlers) => (
    (state = initialState, action) => (
        handlers.hasOwnProperty(action.type)
            ? handlers[action.type](state, action)
            : state
    )
)

export default createReducer(initialState, {
    FILTER_ALBUMS: (state, action) => ({
        ...state,
        albumFilter: action.filterText
    }),
    SELECT_ALBUM: (state, action) => ({
        ...state,
        selectedAlbum: action.album.id
    })
})
