import styles from '../styles/MatchHistory.module.css';

export default function MatchHistory({ username, userGames }) {
  return (
    <div className={styles.matchContainer}>
      {userGames.map((game) => {
        return (
          <div
            className={`${styles.match} ${
              game.winner === username ? styles.victory : styles.defeat
            }`}
          >
            <div className={styles.player}>
              <h2>{game.p1Username}</h2>
              <h4>{game.p1Faction}</h4>
            </div>
            <div className={styles.result}>
              <h3>{game.winner === username ? 'VICTORY' : 'DEFEAT'}</h3>
              <h5>{game.duration}</h5>
            </div>
            <div className={styles.opponent}>
              <h2>{game.p2Username}</h2>
              <h4>{game.p2Faction}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
