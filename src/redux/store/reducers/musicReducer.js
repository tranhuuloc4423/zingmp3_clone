import actionTypes from '../actions/actionTypes';

const initState = {
    currSongId: null,
    currSongData: null,
    isPlaying: false,
    playAlbum: false,
    playlist: null,
    audio: new Audio(),
    isLoadingSong: false,
    recentSongs: [],
    deleteRecentPlaylist: false,
    searchData: {},
};

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURR_SONG:
            return {
                ...state,
                currSongId: action.id || null,
            };
        case actionTypes.SET_CURR_SONG_DATA:
            return {
                ...state,
                currSongData: action.data || null,
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
        case actionTypes.SET_AUDIO:
            return {
                ...state,
                audio: action.audio,
            };
        case actionTypes.IS_LOADING_SONG:
            return {
                ...state,
                isLoadingSong: action.flag,
            };
        case actionTypes.SET_RECENT_SONGS:
            let songs = state.recentSongs;
            const songIdentical = songs?.find((item) => item?.encodeId === action.data?.encodeId);
            if (action.data) {
                if (songIdentical) {
                    songs = songs?.filter((item) => item != songIdentical);
                }
                if (songs?.length >= 20) {
                    songs?.pop();
                }
                songs = [action.data, ...songs];
            }
            return {
                ...state,
                recentSongs: songs,
            };
        case actionTypes.DELETE_RECENT_PLAYLIST:
            return {
                ...state,
                recentSongs: [],
            };
        case actionTypes.SEARCH_DATA:
            return {
                ...state,
                searchData: action.data || {},
            };
        default:
            return state;
    }
};

export default musicReducer;
