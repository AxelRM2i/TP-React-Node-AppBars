import { Link } from 'react-router-dom';

function HeadAndThumb() {
  return (
    <>
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

        <div class="thumb">
            <div style="width: 100%; height: 70%;"></div>
            <h1>Gérez vos bars et commandes, simplement.</h1>
        </div>
    </>
  );
}

export default HeadAndThumb;