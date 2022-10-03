import React from 'react';
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import LiveFeed from "./Components/LiveFeed/LiveFeed";
import Footer from "./Components/Footer/Footer";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import Feedbacks from "./Pages/Feedbacks/Feedbacks";
import Faq from "./Pages/Faq/Faq";
import Guarantees from "./Pages/Guarantees/Guarantees";

function App() {
    return (
        <>
            <Header/>
            <LiveFeed/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/feedbacks" element={<Feedbacks />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/guarantees" element={<Guarantees />} />
                </Routes>
            </div>
            <MobileMenu/>
            <Footer/>
        </>
    );
}

export default App;
