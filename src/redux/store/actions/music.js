import actionTypes from './actionTypes';
import * as apis from '../../../apis';

export const setCurrSong = (id) => ({
    type: actionTypes.SET_CURR_SONG,
    id: id,
});

export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag,
});

export const playAlbum = (flag) => ({
    type: actionTypes.IS_ALBUM,
    flag,
});

export const setPlaylist = (playlist) => ({
    type: actionTypes.PLAYLIST,
    playlist,
});

export const setAudio = (audio) => ({
    type: actionTypes.SET_AUDIO,
    audio,
});

export const setLoadingSong = (flag) => ({
    type: actionTypes.IS_LOADING_SONG,
    flag,
});

export const setCurrSongData = (data) => ({
    type: actionTypes.SET_CURR_SONG_DATA,
    data,
});

export const setRecentSong = (data) => ({
    type: actionTypes.SET_RECENT_SONGS,
    data,
});

export const setRecentAlbum = (data) => ({
    type: actionTypes.SET_RECENT_ALBUMS,
    data,
});

export const deleteRecentPlaylist = (flag) => ({
    type: actionTypes.DELETE_RECENT_PLAYLIST,
    flag,
});

export const search = (keyword) => async (dispatch) => {
    try {
        const res = await apis.apiSearch(keyword);
        if (res.data.err === 0) {
            dispatch({
                type: actionTypes.SEARCH_DATA,
                data: res.data.data,
            });
        } else {
            dispatch({
                type: actionTypes.SEARCH_DATA,
                data: null,
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.SEARCH_DATA,
            data: null,
        });
    }
};

export const fetchDataPlaylist = (id) => async (dispatch) => {
    try {
        const res = await apis.apiGetDetailPlaylist(id);
        if (res.data.err === 0) {
            dispatch({
                type: actionTypes.PLAYLIST,
                playlist: res?.data?.data,
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.PLAYLIST,
            playlist: null,
        });
    }
};
