import VideoGameCard from './VideoGameCard';
import videogamesData from '../videogames.json';

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
};

const VideoGames = () => {
  return (
    <div className="videogames">
      {videogamesData.map((game) => (
        <VideoGameCard key={game.ID} game={game} color={generateRandomColor()}/>
      ))}
    </div>
  );
};

export default VideoGames;