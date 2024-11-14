import {Route, Routes} from "react-router-dom";
import Register from './components/RegisterPage/RegisterPage.tsx'
import Login from "./components/LoginPage/LoginPage.tsx";
import Forbidden from "./components/Forbidden/Forbidden.tsx";
import Layout from "./components/Layout.tsx";


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="login" element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    {/*<Route path="playField/defence" element={<PrivateRoute component={  <PlayField />}/>}/>*/}
                    {/*<Route path="playField/attack" element={<PrivateRoute component={  <PlayField />}/>}/>*/}
                    <Route path="forbidden" element={<Forbidden/>}/>
                    <Route path="*" element={<Login />} />

                </Route>
            </Routes>
        </div>
    );
}

export default App;
