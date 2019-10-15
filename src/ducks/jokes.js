// Actions
const FETCHING_JOKES = 'FETCHING_JOKES'
const RECIEVED_JOKES = 'RECIEVED_JOKES'
const RECIEVED_STALE_JOKES = 'RECIEVED_STALE_JOKES'
const UPDATE_CURRENT_JOKES = 'UPDATE_CURRENT_JOKES'

// Reducer
export default (
    state = {fetchingJokes: false, jokes: [], staleJokes: [], currentJokes: []},
    action = {}
) => {
    switch (action.type) {
        // do reducer stuff
        case FETCHING_JOKES:
            return Object.assign({}, state, {
                fetchingJokes: !state.fetchingJokes,
            })
        case RECIEVED_JOKES:
            return Object.assign({}, state, {
                jokes: action.payload,
            })
        case RECIEVED_STALE_JOKES:
            return Object.assign({}, state, {
                staleJokes: [...action.payload, ...state.staleJokes],
            })
        case UPDATE_CURRENT_JOKES:
            return Object.assign({}, state, {
                currentJokes: action.payload,
            })
        default:
            return state
    }
}

// Action Creators
export const fetchingJokes = () => {
    return {type: FETCHING_JOKES}
}

export const receivedJokes = (jokes) => {
    return {type: RECIEVED_JOKES, payload: jokes}
}

export const updateStaleJokes = (jokes) => {
    return {type: RECIEVED_STALE_JOKES, payload: jokes}
}

export const updateCurrentJokes = (jokes) => {
    return {type: UPDATE_CURRENT_JOKES, payload: jokes}
}

// side effects, only as applicable
// e.g. thunks, epics, etc
