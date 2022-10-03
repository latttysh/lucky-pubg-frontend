import React from 'react';
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import LiveFeed from "./Components/LiveFeed/LiveFeed";
import Footer from "./Components/Footer/Footer";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import Feedbacks from "./Pages/Feedbacks/Feedbacks";

function App() {
    return (
        <>
            <Header/>
            <LiveFeed/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/feedbacks" element={<Feedbacks />} />
                </Routes>
            </div>
            <MobileMenu/>
            <Footer/>
        </>
    );
}

export default App;
