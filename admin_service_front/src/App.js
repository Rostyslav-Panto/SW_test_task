import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "./components/MainPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/groups' element={<MainPage />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;