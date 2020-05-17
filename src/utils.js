export const createReducer = (initialState, handlers) => (
    (state = initialState, action) => (
        handlers.hasOwnProperty(action.type)
            ? handlers[action.type](state, action)
            : state
    )
)


export function observeStore(store, select, onChange) {
    let currentState

    function handleChange() {
      let nextState = select(store.getState())
      if (nextState !== currentState) {
        currentState = nextState
        onChange(currentState)
      }
    }

    let unsubscribe = store.subscribe(handleChange)
    handleChange()
    return unsubscribe
}