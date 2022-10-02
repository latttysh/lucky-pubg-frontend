import React from 'react';
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import LiveFeed from "./Components/LiveFeed/LiveFeed";

function App() {
    return (
        <>
            <Header/>
            <LiveFeed/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
