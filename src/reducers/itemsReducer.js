const SET_ITEMS = "SET_ITEMS"; 
const SET_IS_FETCHING = "SET_IS_FETCHING"; 

const defaultState = {
    items: [],
    isFetching: true
}


export default function itemsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload.items,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default: 
            return state
    }
}

export const setItems = (items) => ({type:SET_ITEMS, payload:items});
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool});