import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import GamesByMonth from "./components/GamesByMonth";

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const months = {
    January: [],
    February: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: [],
  };

  for (let month in months) {
    // set month value if any game is available
    months[month] = games.filter((game) => {
      // parsed date into human readable format
      const parsedDate = parseISO(game.start.datetime);
      const formattedDate = format(parsedDate, "LLLL");
      return formattedDate === month;
    });
  }

  return (
    <div>
      <h1 className="heading">Schedule</h1>
      <div>
        {/* loop object */}
        {Object.entries(months).map((games) => (
          <GamesByMonth games={games} />
        ))}
      </div>
    </div>
  );
}

export default App;
