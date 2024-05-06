```typescript
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Player {
  name: string;
  score: number;
}

const useLeaderBoard = () => {
  const [leaderBoardState, setLeaderBoardState] = useState<Player[]>([]);
  const [leaderBoardActions, setLeaderBoardActions] = useState({ updateLeaderBoard: () => {} });

  useEffect(() => {
    const fetchLeaderBoard = async () => {
      try {
        const response = await axios.get('/api/leaderboard');
        setLeaderBoardState(response.data);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      }
    };

    const updateLeaderBoard = async (player: Player) => {
      try {
        const response = await axios.post('/api/leaderboard', player);
        setLeaderBoardState(response.data);
      } catch (error) {
        console.error('Failed to update leaderboard:', error);
      }
    };

    fetchLeaderBoard();
    setLeaderBoardActions({ updateLeaderBoard });
  }, []);

  return { leaderBoardState, leaderBoardActions };
};

export default useLeaderBoard;
```