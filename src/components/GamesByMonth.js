import { format, parseISO } from 'date-fns';
import { useEffect, useState } from "react";
import GamesCard from './GamesCard';

const GamesByMonth = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

//   const monthArray = games.filter(game => {
//     const parsedDate = parseISO(game.start.datetime)
//     const formattedMonth = format(parsedDate, 'LLLL')

//   } )
  const parsedDate = parseISO(games[16].start.datetime)
  const formattedMonth = format(parsedDate, 'LLLL')
//   return month.includes(formattedMonth)
  console.log(formattedMonth);

  return (
    <div>
      <h1 className='section-title'>Schedule</h1>
      <div>
        {
            games.map((game, index) => <GamesCard key={game.id} game={game} index={index}/>)
        }
      </div>
    </div>
  );
};

export default GamesByMonth;
