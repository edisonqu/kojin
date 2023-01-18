import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Pages/Home'


import {Routes, Route, BrowserRouter } from "react-router-dom"; 
import Background from './Pages/Background';
import Political from "./Pages/Political";
import Economic from "./Pages/Economic";
import Socio from "./Pages/Socio";
import International from "./Pages/International";
import Advantage from "./Pages/Advantage";
import Recs from "./Pages/Recs";
import Cite from "./Pages/Cite";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Home />}></Route>
                    <Route path='/background' exact element={<Background />}></Route>
                    <Route path='/political' exact element={<Political/>}></Route>
                    <Route path='/economic' exact element={<Economic />}></Route>
                    <Route path='/socio' exact element={<Socio />}></Route>
                    <Route path='/international' exact element={<International />}></Route>
                    <Route path='/advantage' exact element={<Advantage />}></Route>
                    <Route path='/recs' exact element={<Recs />}></Route>
                    <Route path='/cite' exact element={<Cite />}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
