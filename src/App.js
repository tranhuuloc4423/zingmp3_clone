import { Home, Public, Login, Album, WeekRank, ZingChart } from './containers/public/';
import { SingerMain } from './components/Singer';
import { SearchMain, SearchSongs, SearchAll, SearchPlaylist } from './components/Search/';
import { Routes, Route } from 'react-router-dom';
import paths from './ultis/paths';
import { useEffect } from 'react';
import * as actions from './redux/store/actions';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const {
    PUBLIC,
    HOME,
    LOGIN,
    MYMUSIC,
    ALBUM__TITLE__ID,
    PLAYLIST__TITLE__ID,
    WEEKRANK__TITLE_ID,
    ZING__CHART,
    SEARCH,
    ALL,
    SONG,
    PLAYLIST,
    HOME__SINGER,
} = paths;

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getHome());
    }, []);
    return (
        <>
            <div className="App bg-slate-800 h-screen font-sans">
                <Routes>
                    <Route path={PUBLIC} element={<Public />}>
                        <Route path={HOME} element={<Home />} />
                        <Route path={LOGIN} element={<Login />} />
                        <Route path={MYMUSIC} element={<Login />} />
                        <Route path={ALBUM__TITLE__ID} element={<Album />} />
                        <Route path={PLAYLIST__TITLE__ID} element={<Album />} />
                        <Route path={WEEKRANK__TITLE_ID} element={<WeekRank />} />
                        <Route path={ZING__CHART} element={<ZingChart />} />
                        <Route path={HOME__SINGER} element={<SingerMain />} />
                        <Route path={SEARCH} element={<SearchMain />}>
                            <Route path={ALL} element={<SearchAll />} />
                            <Route path={SONG} element={<SearchSongs />} />
                            <Route path={PLAYLIST} element={<SearchPlaylist />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="dark"
            />
        </>
    );
}

export default App;
