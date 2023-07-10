import actionTypes from '../actions/actionTypes';

const initState = {
    currSongId: null,
    isPlaying: false,
    playAlbum: false,
    playlist: null,
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
        case actionTypes.IS_ALBUM:
            return {
                ...state,
                playAlbum: action.flag,
            };
        case actionTypes.PLAYLIST:
            return {
                ...state,
                playlist: action.playlist || null,
            };
        default:
            return state;
    }
};

export default musicReducer;
