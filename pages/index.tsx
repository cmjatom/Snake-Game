```tsx
import React from 'react';
import Head from 'next/head';
import GameBoard from '../components/GameBoard';
import ScoreBoard from '../components/ScoreBoard';
import Controls from '../components/Controls';
import LeaderBoard from '../components/LeaderBoard';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Snake Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ScoreBoard />
        <GameBoard />
        <Controls />
        <LeaderBoard />
      </main>
    </div>
  );
};

export default Home;
```