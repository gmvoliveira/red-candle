const initialState = {
    albumFilter: ''
}

const createReducer = (initialState, handlers) => (
    (state = initialState, action) => (
        handlers.hasOwnProperty(action.type)
            ? handlers[action.type](state, action)
            : state
    )
)

export default createReducer(initialState, {
    FILTER_ALBUMS: (state, action) => {
        let new_state = {
            ...state,
            albumFilter: action.filterText
        }
        console.log(new_state)
        return new_state
    }
})
