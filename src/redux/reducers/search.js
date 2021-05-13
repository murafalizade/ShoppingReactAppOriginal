const INITIAL_STATE = {
    search: ""
}

export const  SeacrhText = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE_SEARCH_TEXT":
            return {
                ...state, search: action.payload
            };
        default:
            return state;
    }
}