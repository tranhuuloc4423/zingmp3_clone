import { Home, Public, Login, Album } from './containers/public/';
import { Routes, Route } from 'react-router-dom';
import paths from './ultis/paths';
import { useEffect } from 'react';
import * as actions from './redux/store/actions';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { PUBLIC, HOME, LOGIN, MYMUSIC, ALBUM__TITLE__ID, PLAYLIST__TITLE__ID } = paths;

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
