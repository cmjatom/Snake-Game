```tsx
import React from 'react';
import { useLeaderBoard } from '../hooks/useLeaderBoard';
import styles from '../styles/LeaderBoard.module.scss';

const LeaderBoard: React.FC = () => {
  const { leaderBoardState } = useLeaderBoard();

  return (
    <div id="leader-board" className={styles.leaderBoard}>
      <h2>Leaderboard</h2>
      <ul>
        {leaderBoardState.map((player, index) => (
          <li key={index}>
            {index + 1}. {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderBoard;
```