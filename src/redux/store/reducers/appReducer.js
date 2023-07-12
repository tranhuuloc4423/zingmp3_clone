import actionTypes from '../actions/actionTypes';

const initState = {
    banner: [],
    chill: {},
    closeSidebar: true,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find((item) => item.sectionId === 'hSlider').items || null,
                chill: action.homeData?.find((item) => item.sectionId === 'hEditorTheme') || {},
            };
        case actionTypes.CLOSE_SIDEBAR:
            return {
                ...state,
                closeSidebar: action.flag,
            };
        default:
            return state;
    }
};

export default appReducer;
