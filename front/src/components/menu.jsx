import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <header>
            <div class="headerTitle">
                UBar
            </div>
            <div class="navbar">
                <ul class="navlist">
                    <li href="#">Accueil</li>
                    <li href="#">Bars</li>
                    <li href="#">Commandes</li>
                    <li href="#">Qui sommes-nous</li>
                </ul>
            </div>
            <div class="logbar">

            </div>
        </header>
    );
};

export default Menu;