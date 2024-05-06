Shared Dependencies:

1. **Exported Variables**: `gameState`, `gameActions`, `leaderBoardState`, `leaderBoardActions` from the hooks `useGameLogic` and `useLeaderBoard`.

2. **Data Schemas**: `Player` schema with fields `name` and `score` for the leaderboard feature.

3. **DOM Element IDs**: `game-board`, `snake`, `fruit`, `score-board`, `controls`, `leader-board`.

4. **Message Names**: `GAME_OVER`, `NEW_SCORE`, `UPDATE_LEADERBOARD` for communication between components and hooks.

5. **Function Names**: `initializeGame`, `moveSnake`, `consumeFruit`, `checkCollision`, `updateScore`, `updateLeaderBoard` in `useGameLogic` and `useLeaderBoard` hooks.

6. **React Components**: `GameBoard`, `Snake`, `Fruit`, `ScoreBoard`, `Controls`, `LeaderBoard`.

7. **SCSS Modules**: `GameBoard.module.scss`, `Snake.module.scss`, `Fruit.module.scss`, `ScoreBoard.module.scss`, `Controls.module.scss`, `LeaderBoard.module.scss`.

8. **API Routes**: `api/leaderboard.ts` for handling leaderboard related requests.

9. **Test Files**: `GameBoard.test.tsx`, `Snake.test.tsx`, `Fruit.test.tsx`, `ScoreBoard.test.tsx`, `Controls.test.tsx`, `LeaderBoard.test.tsx`, `useGameLogic.test.ts`, `useLeaderBoard.test.ts`.

10. **Configuration Files**: `package.json`, `tsconfig.json`, `next.config.js`, `jest.config.js`, `.babelrc`, `.eslintrc.js`, `.prettierrc.js`.

11. **Documentation Files**: `README.md`, `CHANGELOG.md`.

12. **Public Assets**: `favicon.ico`, `manifest.json`, `logo192.png`, `logo512.png`, `robots.txt`.

13. **Ignored Files**: `.gitignore`.