import actionTypes from '../actions/actionTypes';

const initState = {
    banner: [],
    recentAlbums: [],
    sections: [],
    newRelease: {},
    weekChart: [],
    closeSidebar: true,
    isLoadingData: false,
    chart: {},
    rank: [],
    searchHistory: [],
    scrolltop: true,
    charthome: null,
    setTimer: 0,
    openCountdown: false,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find((item) => item.sectionId === 'hSlider').items || null,
                sections:
                    action?.homeData?.filter((item) => item.sectionType === 'playlist') || null,
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
        case actionTypes.SET_RECENT_ALBUMS:
            let albums = state.recentAlbums;
            const albumIdentical = albums?.find((item) => item.encodeId === action.data?.encodeId);
            if (action.data) {
                if (albumIdentical) {
                    albums = albums?.filter((item) => item !== albumIdentical);
                }
                if (albums?.length >= 5) {
                    albums?.pop();
                }
                albums = [action.data, ...albums];
            }
            return {
                ...state,
                recentAlbums: albums,
            };

        case actionTypes.SEARCH_HISTORY:
            let history = state.searchHistory;
            const historyIdentical = history?.find((item) => item === action.data);
            if (action.data) {
                if (historyIdentical) {
                    history = history?.filter((item) => item !== historyIdentical);
                }
                if (history?.length >= 5) {
                    history?.pop();
                }
                history = [action.data, ...history];
            }
            console.log(history);
            return {
                ...state,
                searchHistory: history,
            };

        case actionTypes.SCROLL_TOP:
            return {
                ...state,
                scrolltop: action.flag,
            };

        case actionTypes.GET_CHART_HOME:
            return {
                ...state,
                charthome: action.charthome || null,
            };
        case actionTypes.SET_TIMER:
            return {
                ...state,
                setTimer: action.data || 0,
            };
        case actionTypes.TIMER_DEC:
            return {
                ...state,
                setTimer: state.setTimer - 1,
            };
        case actionTypes.SET_OPEN_COUNTDOWN:
            return {
                ...state,
                openCountdown: action.flag,
            };
        default:
            return state;
    }
};

export default appReducer;
