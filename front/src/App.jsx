import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import HomePage from './pages/homepage';
import BarList from './pages/barList';
import "./App.css";
// import ListeBieresPage from './pages/ListeBieres';
// import ListeCommandesPage from './pages/ListeCommandes';

const App = () => {
    return (
        <Router>
            <>
                <Menu />
                <Manager />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/bars" element={<BarList />} />
                    {/* <Route path="/bieres" element={<ListeBieresPage />} />
                    <Route path="/commandes" element={<ListeCommandesPage />} /> */}
                </Routes>
            </>
        </Router>
    );
};

export default App;