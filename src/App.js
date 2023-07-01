import { Home, Public, Login } from "./containers/public/";
import { Routes, Route } from "react-router-dom";
import paths from "./ultis/paths";
const { PUBLIC, HOME, LOGIN, STAR } = paths;
function App() {
    return (
        <div className="App bg-slate-800 h-screen">
            <Routes>
                <Route path={PUBLIC} element={<Public />}>
                    <Route path={HOME} element={<Home />} />
                    <Route path={LOGIN} element={<Login />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
