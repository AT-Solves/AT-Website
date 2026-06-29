import { memo } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Investors from './pages/Investors';
import About from './pages/About';
import Profile from './pages/Profile';
import AIAchiever from './pages/AIAchiever';
import QAMill from './pages/QAMill';
import { ROUTES } from './config/constants';

const App = memo(function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={ROUTES.HOME}        element={<Home />} />
                <Route path={ROUTES.PRODUCTS}    element={<Products />} />
                <Route path={ROUTES.INVESTORS}   element={<Investors />} />
                <Route path={ROUTES.ABOUT}       element={<About />} />
                <Route path={ROUTES.PROFILE}     element={<Profile />} />
                <Route path={ROUTES.AI_ACHIEVER} element={<AIAchiever />} />
                <Route path={ROUTES.QA_MILL}     element={<QAMill />} />
            </Routes>
            <Footer />
        </Router>
    );
});

App.displayName = "App";

export default App;
