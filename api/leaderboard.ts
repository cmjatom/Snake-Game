```typescript
import { NextApiRequest, NextApiResponse } from 'next';

interface Player {
  name: string;
  score: number;
}

let leaderboard: Player[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(leaderboard);
      break;
    case 'POST':
      const newPlayer: Player = req.body;
      leaderboard.push(newPlayer);
      leaderboard.sort((a, b) => b.score - a.score);
      if (leaderboard.length > 10) {
        leaderboard = leaderboard.slice(0, 10);
      }
      res.status(200).json(leaderboard);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```