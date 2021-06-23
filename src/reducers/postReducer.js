import * as actions from "../actions/types"

const initialState = {
    items: [],
    item: {}
}
// eslint-disable-next-line
export default function(state= initialState, action){
    switch (action.type){

        case actions.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case actions.NEW_POST:
            //console.log(action.payload)
            return {
                ...state,
                item: action.payload
            }
        default: 
            return state
    }
}