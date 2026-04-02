import { memo } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Demos from './pages/Demos';
import Investors from './pages/Investors';
import { ROUTES } from './config/constants';

const App = memo(function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.PRODUCTS} element={<Products />} />
                <Route path={ROUTES.DEMOS} element={<Demos />} />
                <Route path={ROUTES.INVESTORS} element={<Investors />} />
            </Routes>
            <Footer />
        </Router>
    );
});

App.displayName = "App";

export default App;