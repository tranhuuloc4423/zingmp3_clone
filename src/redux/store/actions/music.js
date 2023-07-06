import actionTypes from "./actionTypes";

export const setCurrSong = (id) => ({
    type: actionTypes.SET_CURR_SONG,
    id: id,
});

export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag,
});
