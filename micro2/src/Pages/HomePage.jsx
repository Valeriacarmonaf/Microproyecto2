import React, { useState } from 'react';
import './HP.css'; // Importa el archivo CSS
import aventura from "../assets/aventura.jpeg"
import estrategia from "../assets/estrategia.jpeg"
import construccion from "../assets/construccion.png"
import futbol from "../assets/futbol.jpeg"
import zombies from "../assets/zombies.jpeg"
import { Link } from 'react-router-dom';

const BotonCambiante = ({ text, textClicked, onClick }) => {
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
        setClicked(prevState => !prevState);
        if (onClick) {
          onClick();
        }
      };
      
    return (
        <button className={`boton ${clicked ? 'cambiado' : ''}`} onClick={handleClick}>
            {clicked ? textClicked : text}
        </button>    );
  };
  

export default function Home()
{
      const handleClickSuscribirse = () => {
        // No hace nada
      };
    
    return (
        <div>
            <Link to="/profile">
                <button className="boton">Ver perfil</button>
            </Link>"
            <Link to="/videogames">
                <button className="boton">Buscar juegos</button>
            </Link>
            
            <div class="CardContainer">
                <div class="Card">
                    <img src={aventura} alt="Imagen de la tarjeta" style={{ maxWidth: '100%' }}/>
                    <div>
                        <h1>Club de Aventureros</h1>
                        <h3>Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura.</h3>
                        <ul>
                            <li>The Witcher 3</li>
                            <li>The Legend of Zelda</li>
                            <li>Assassin's Creed</li>
                        </ul>
                        <BotonCambiante text="Suscribirse" textClicked="Suscrito" onClick={handleClickSuscribirse} />
                    </div>
                </div>

                <div class="Card">
                    <img src={estrategia} alt="Imagen de la tarjeta" style={{ maxWidth: '100%' }}/>
                    <div>
                        <h1>Club de Estrategia</h1>
                        <h3>Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales.</h3>
                        <ul>
                            <li>Dark Souls III</li>
                            <li>League of Legends</li>
                            <li>Genshin Impact</li>
                        </ul>
                        <BotonCambiante text="Suscribirse" textClicked="Suscrito" onClick={handleClickSuscribirse} />
                    </div>
                </div>

                <div class="Card">
                    <img src={construccion} alt="Imagen de la tarjeta" style={{ maxWidth: '100%' }}/>
                    <div>
                        <h1>Club de Constructores</h1>
                        <h3>Comparte tus creaciones en Minecraft, diseña estructuras asombrosas y colabora en proyectos épicos.</h3>
                        <ul>
                            <li>Minecraft</li>
                            <li>Fortnite</li>
                            <li>Animal Crossing</li>
                        </ul>
                        <BotonCambiante text="Suscribirse" textClicked="Suscrito" onClick={handleClickSuscribirse} />
                    </div>
                </div>

                <div class="Card">
                    <img src={futbol} alt="Imagen de la tarjeta" style={{ maxWidth: '100%' }}/>
                    <div>
                        <h1>Club de Fútbol Virtual</h1>
                        <h3>Forma parte de un equipo virtual, compite en torneos y demuestra tus habilidades en FIFA 22.</h3>
                        <ul>
                            <li>FIFA 22</li>
                            <li>Warzone</li>
                            <li>World of Warcraft</li>
                        </ul>
                        <BotonCambiante text="Suscribirse" textClicked="Suscrito" onClick={handleClickSuscribirse} />
                    </div>
                </div>

                <div class="Card">
                    <img src={zombies} alt="Imagen de la tarjeta" style={{ maxWidth: '100%' }}/>
                    <div>
                        <h1>Club de Cazadores de Zombies</h1>
                        <h3>Únete a otros supervivientes en la lucha contra hordas de no muertos en juegos como Left 4 Dead o Resident Evil.</h3>
                        <ul>
                            <li>Red Dead Redemption</li>
                            <li>Among Us</li>
                            <li>Apex Legends</li>
                        </ul>
                        <BotonCambiante text="Suscribirse" textClicked="Suscrito" onClick={handleClickSuscribirse} />
                    </div>
                </div>
            </div>
        </div>
      );
}