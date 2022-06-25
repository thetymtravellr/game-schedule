import { format, parseISO } from "date-fns";
import styles from "../styles/cardStyles.module.css";
const GamesCard = ({ game, index }) => {
  // destructure game
  const { start, opponent_name, location } = game;

  //   format date to show it on the ui
  const parsedDate = parseISO(start.datetime);
  const formattedDay = format(parsedDate, "eee");
  const formattedDate = format(parsedDate, "d");
  const formattedTime = format(parsedDate, "p");

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {/* game date */}
        <div className={styles.date}>
          <p>{formattedDay}</p>
          <p>{formattedDate}</p>
        </div>
        <div className={styles.info}>
          {/* game info */}
          <p>
            <span>{index % 2 === 0 ? "vs." : "@"}</span>
            {opponent_name}
          </p>
          <p>at {location}</p>
        </div>
      </div>
      {/* game time */}
      <div>
        <p>{formattedTime}</p>
      </div>
    </div>
  );
};

export default GamesCard;
