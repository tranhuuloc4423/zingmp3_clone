import actionTypes from "../actions/actionTypes";

const initState = {
    currSongId: null,
    isPlaying: false,
};

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURR_SONG:
            return {
                ...state,
                currSongId: action.id || null,
            };
        case actionTypes.PLAY:
            return {
                ...state,
                isPlaying: action.flag,
            };
        default:
            return state;
    }
};

export default musicReducer;
