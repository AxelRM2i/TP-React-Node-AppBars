import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import HomePage from './pages/homepage';
import BarList from './pages/barList';
// import ListeBieresPage from './pages/ListeBieres';
// import ListeCommandesPage from './pages/ListeCommandes';

const App = () => {
    return (
        <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/bars" element={<BarList />} />
                    {/* <Route path="/bieres" element={<ListeBieresPage />} />
                    <Route path="/commandes" element={<ListeCommandesPage />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;