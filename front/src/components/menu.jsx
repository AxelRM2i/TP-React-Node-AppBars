import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/bars">Liste des bars</Link>
                </li>
                <li>
                    <Link to="/#">Liste des bières</Link>
                </li>
                <li>
                    <Link to="/#">Liste des commandes</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;