import actionTypes from './actionTypes';
import * as apis from '../../../apis';

export const getHome = () => async (dispatch) => {
    try {
        const res = await apis.getHome();
        if (res?.status === 200) {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: res.data.data.items,
            });
        } else {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: null,
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_HOME,
            homeData: null,
        });
    }
};

export const closeSidebar = (flag) => ({
    type: actionTypes.CLOSE_SIDEBAR,
    flag,
});

export const setLoadingData = (flag) => ({
    type: actionTypes.IS_LOADING_DATA,
    flag,
});

export const setSearchHistory = (data) => ({
    type: actionTypes.SEARCH_HISTORY,
    data,
});

export const setScrollTop = (flag) => ({
    type: actionTypes.SCROLL_TOP,
    flag,
});

export const setTimer = (data) => ({
    type: actionTypes.SET_TIMER,
    data,
});

export const setTimerDec = () => ({
    type: actionTypes.TIMER_DEC,
});

export const setOpenCountdown = (flag) => ({
    type: actionTypes.SET_OPEN_COUNTDOWN,
    flag,
});

export const fetchDataChartHome = () => async (dispatch) => {
    try {
        const res = await apis.apiGetChartHome();
        if (res.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CHART_HOME,
                charthome: res?.data?.data,
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_CHART_HOME,
            charthome: null,
        });
    }
};
