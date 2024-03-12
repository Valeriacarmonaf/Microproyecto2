// Removed unused import statement for React
import './GamesCard.css';

// Definir una lista de colores dinámicos
const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff'];

import PropTypes from 'prop-types';

const VideoGameCard = ({ game }) => {
  // Seleccionar un color de la lista para la tarjeta actual
  const colorIndex = game.ID % colors.length;
  const cardColor = colors[colorIndex];

  return (
    <div className="CardContainer">
      <div className="Card" style={{ background: `linear-gradient(45deg, ${cardColor}, #ffffff)` }}>
        <h2>{game.titulo}</h2>
        <p><strong>Género:</strong> {game.genero}</p>
        <p>{game.descripcion}</p>
      </div>
    </div>
  );
};

VideoGameCard.propTypes = {
  game: PropTypes.object.isRequired,
};

export default VideoGameCard;