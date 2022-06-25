import GamesCard from "./GamesCard";

const GamesByMonth = ({ games }) => {
 
  return (
    <>
    {/* check if games has a value */}
      {games[1].length > 0 && (
        <div>
          <h2 className="section-title">{games[0]} 2022</h2>
          <div>
            {/* loop games */}
            {games[1].map((game, index) => (
              <GamesCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GamesByMonth;
