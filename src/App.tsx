import {Route, Routes} from "react-router-dom";
// import PrivateRoute from "./utils/PrivateRoute";
// import Layout from "./components/Layout";
// import Forbidden from "./components/Forbidden/Forbidden.tsx";
// import Login from './components/LoginPage/LoginPage.tsx'
import Register from './components/RegisterPage/RegisterPage.tsx'


function App() {
    return (
        <div>
            <Routes>
            {/*    <Route path="/" element={<Layout />}>*/}
            {/*        <Route path="/" element={<Login/>}/>*/}
                    <Route path='register' element={<Register/>}/>
                    {/*<Route path="playField/:index" element={<PrivateRoute component={  <PlayField />}/>}/>*/}
                    {/*<Route path="forbidden" element={<Forbidden/>}/>*/}
                    {/*<Route path="*" element={<Login />} />*/}

            {/*    </Route>*/}
            </Routes>
        </div>
    );
}

export default App;
