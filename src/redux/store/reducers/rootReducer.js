import appReducer from './appReducer';
import musicReducer from './musicReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
};

const musicConfig = {
    ...commonConfig,
    key: 'music',
    whitelist: ['currSongId', 'currSongData', 'playlist', 'recentSongs'],
};

const homeConfig = {
    ...commonConfig,
    key: 'app',
    whitelist: ['recentAlbums', 'closeSidebar', 'searchHistory', 'charthome'],
};

const rootReducer = combineReducers({
    app: persistReducer(homeConfig, appReducer),
    music: persistReducer(musicConfig, musicReducer),
});
export default rootReducer;
