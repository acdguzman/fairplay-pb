FairPlay PB - Fairness Engine
Version 0.1
Goal

The Fairness Engine automatically determines the next four players to enter a court while maximizing fairness across the entire Open Play session.

Design Principles

The scheduler should:

Minimize player waiting time
Balance total games played
Avoid repeated teammates
Avoid repeated opponents
Balance skill levels
Support different court finish times
Require minimal manual intervention
Player Priority Score

Every waiting player receives a dynamic priority score.

Priority Score =
Waiting Score
+ Fairness Score
+ Rotation Score
+ Variety Score
+ Skill Balance Score

The player with the highest score is selected first.

Waiting Score

Players waiting longer receive a higher score.

Example

Allen

Waiting
28 minutes

Score
+40
Fairness Score

Players with fewer total games receive additional priority.

Example

Allen
Games Played
3

John
Games Played
5

Allen receives higher priority.
Rotation Score

Players who recently finished a game receive a temporary penalty to avoid immediate replay.

Example

Finished 2 minutes ago

-25 points
Variety Score

The scheduler tracks teammate history and opponent history.

Penalty is applied if players recently played together.

Example

Allen + John

Played together

Last Match

Penalty
Skill Balance Score

Teams should have similar average skill ratings.

Example

Court
3.5
3.0
vs
3.5
3.0

Instead of
4.5
4.5
vs
2.5
2.5
Court Assignment Process

When a court becomes available:

Step 1
Find all waiting players.
↓
Step 2
Calculate Priority Score.
↓
Step 3
Sort descending.
↓
Step 4
Select top candidates.
↓
Step 5
Generate best team combinations.
↓
Step 6
Pick combination with highest fairness score.
↓
Assign court.

Special Rules
Rule 1
Never allow a player to sit twice if others have not yet played.

Rule 2
Avoid identical teams whenever possible.

Rule 3
Avoid identical opponents whenever possible.

Rule 4
If waiting exceeds 20 minutes, waiting priority overrides teammate variety.

Rule 5
If player count is not divisible by four, rotate leftovers fairly.

Example
35 Players
3 Courts
Court 1 finishes.
↓
Engine recalculates.
↓
Waiting Queue

Allen
Bryan
Carl
David

↓
Creates teams
Allen + David
vs
Bryan + Carl
↓
Court 1 starts immediately.

Future Improvements
AI-assisted matchmaking
Tournament mode
Handicap balancing
Mixed doubles mode
Beginner protection
Partner request mode
Mobile notifications
