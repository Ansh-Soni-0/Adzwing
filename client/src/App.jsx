import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import LenisScroll from "./components/LenisScroll";
import Register from "./pages/Register";

export default function App() {
    const location = useLocation();
    
    const hideLayout = location.pathname === "/register";

    return (
        <>
            <LenisScroll />

            {!hideLayout && <Navbar />}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            {!hideLayout && <Footer />}
        </>
    );
}
