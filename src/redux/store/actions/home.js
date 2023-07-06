import actionTypes from "./actionTypes";
import * as apis from "../../../apis";

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
