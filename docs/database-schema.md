FairPlay PB Database Design
Version 0.1

Tables
Players

Stores player information.
Tables
Players
Stores player information.
| Column              | Type         |
| ------------------- | ------------ |
| id                  | UUID         |
| name                | varchar      |
| gender              | enum(M,F)    |
| skill               | decimal(2,1) |
| gamesPlayed         | int          |
| wins                | int          |
| losses              | int          |
| totalWaitingMinutes | int          |
| active              | boolean      |
| createdAt           | datetime     |


Sessions
Every Open Play event.
| Column      | Type     |
| ----------- | -------- |
| id          | UUID     |
| title       | varchar  |
| date        | datetime |
| location    | varchar  |
| totalCourts | int      |
| status      | enum     |

Example
Friday Night Open Play
3 Courts
35 Players
6PM-9PM


SessionPlayers
Players registered in a session.

| Column        | Type              |
| ------------- | ----------------- |
| id            | UUID              |
| sessionId     | UUID              |
| playerId      | UUID              |
| currentStatus | Waiting / Playing |
| gamesPlayed   | int               |
| waitRounds    | int               |


Courts
| Column      | Type                |
| ----------- | ------------------- |
| id          | UUID                |
| sessionId   | UUID                |
| courtNumber | int                 |
| status      | Playing / Available |


Matches
Stores every match.

| Column      | Type     |
| ----------- | -------- |
| id          | UUID     |
| sessionId   | UUID     |
| courtId     | UUID     |
| roundNumber | int      |
| startTime   | datetime |
| endTime     | datetime |
| winnerTeam  | int      |


MatchPlayers
Players inside a match.

| Column   | Type  |
| -------- | ----- |
| id       | UUID  |
| matchId  | UUID  |
| playerId | UUID  |
| team     | A / B |


Waiting Queue
Very important table.

| Column        | Type     |
| ------------- | -------- |
| id            | UUID     |
| sessionId     | UUID     |
| playerId      | UUID     |
| waitingSince  | datetime |
| priorityScore | decimal  |


Relationships
Session
│
├── Players
├── Courts
├── Matches
│      └── MatchPlayers
│
└── WaitingQueue

Why this design?
The database is normalized to avoid duplicate data while allowing efficient scheduling, player rotation, and fairness calculations.

