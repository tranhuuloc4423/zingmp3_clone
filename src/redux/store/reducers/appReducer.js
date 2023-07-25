import actionTypes from '../actions/actionTypes';

const initState = {
    banner: [],
    hEditorTheme: {},
    hEditorTheme2: {},
    hEditorTheme3: {},
    hEditorTheme4: {},
    hArtistTheme: {},
    newRelease: {},
    weekChart: [],
    closeSidebar: true,
    isLoadingData: false,
    chart: {},
    rank: [],
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find((item) => item.sectionId === 'hSlider').items || null,
                hEditorTheme:
                    action.homeData?.find((item) => item.sectionId === 'hEditorTheme') || {},
                hEditorTheme2:
                    action.homeData?.find((item) => item.sectionId === 'hEditorTheme2') || {},
                hEditorTheme3:
                    action.homeData?.find((item) => item.sectionId === 'hEditorTheme3') || {},
                hEditorTheme4:
                    action.homeData?.find((item) => item.sectionId === 'hEditorTheme4') || {},
                hArtistTheme:
                    action.homeData?.find((item) => item.sectionId === 'hArtistTheme') || {},
                newRelease:
                    action.homeData?.find((item) => item.sectionType === 'new-release') || {},
                weekChart:
                    action.homeData?.find((item) => item.sectionType === 'weekChart').items || [],
                chart: action.homeData?.find((item) => item.sectionId === 'hZC').chart || {},
                rank: action.homeData?.find((item) => item.sectionId === 'hZC').items || [],
            };
        case actionTypes.CLOSE_SIDEBAR:
            return {
                ...state,
                closeSidebar: action.flag,
            };
        case actionTypes.IS_LOADING_DATA:
            return {
                ...state,
                isLoadingData: action.flag,
            };
        default:
            return state;
    }
};

export default appReducer;
