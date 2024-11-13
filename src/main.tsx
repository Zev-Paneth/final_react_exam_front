import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {store} from './store/store.ts'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
                <App/>
        </BrowserRouter>
    </StrictMode>,
)