import {Route, Routes} from "react-router-dom";
import Register from './components/RegisterPage/RegisterPage.tsx'
import Login from "./components/LoginPage/LoginPage.tsx";
import Forbidden from "./components/Forbidden/Forbidden.tsx";
import Layout from "./components/Layout.tsx";
import DefencePrivateRoute from "./utils/DefencePrivateRoute.tsx";
import AttackPrivateRoute from "./utils/AttackPrivateRoute.tsx";
import DefencePage from "./components/DefencePage.tsx";


function PlayField() {
    return null;
}

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="login" element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path="playField/defence" element={<DefencePrivateRoute component={  <DefencePage />}/>}/>
                    <Route path="playField/attack" element={<AttackPrivateRoute component={  <PlayField />}/>}/>
                    <Route path="forbidden" element={<Forbidden/>}/>
                    <Route path="*" element={<Login />} />

                </Route>
            </Routes>
        </div>
    );
}

export default App;
