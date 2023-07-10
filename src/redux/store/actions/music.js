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

// export const fetchDataPlaylist = (id) => async (dispatch) => {
//     try {
//         const res = await apis.apiGetDetailPlaylist(id);
//         if (res.data.err === 0) {
//             dispatch({
//                 type: actionTypes.PLAYLIST,
//                 playlist: res.data?.data?.items,
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: actionTypes.PLAYLIST,
//             playlist: null,
//         });
//     }
// };
