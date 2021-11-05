# Castle Card Game

Introduction

![](https://github.com/PrinsWillem/castle_game_project/blob/main/client/public/images/castle-logo.png?raw=true)

## Contents
* [About us](#about-us)
* [Project](#Project)
* [Original game](#original-game)
* [Gameplay](#Gameplay)
* [Brief](#Brief)
* [Technologies](#Technologies)
* [Setup](#Setup)

## About us
Text

## Project
**Original Brief for project:**

Create a browser game based on an existing card or dice game. Model and test the game logic and then display it in the browser for a user to interact with.

Write your own MVP with some specific goals to be achieved based on the game you choose to model.

You might use persistence to keep track of the state of the game or track scores/wins. Other extended features will depend on the game you choose.

## Original Game
The Castle Card Game is an original game created by Loic Marles and designed by Anthony Byledbal. It was developed as an educational game for which the players could learn more about medieval castles. It was never released as a physical game because the cost of production was too expensive, but find its way to the digital world.

## Original Game
The Castle Card Game is an original game created by Loic Marles and designed by Anthony Byledbal. It was developed as an educational game for which the players could learn more about medieval castles. It was never released as a physical game because the cost of production was too expensive, but find its way to the digital world.

## Gameplay

### Rules

**The goal is to be the first to build your castle**.

To ensure your victory you must complete **2 objectives**:
1. Amassing 20 points or more with the tool cards;

![](https://github.com/PrinsWillem/castle_game_project/blob/main/client/public/images/tool-cards.png?raw=true)

2. Gathering all 5 necessary material cards (Money, Wood, Stone, Mortar, Labour).

![](https://github.com/PrinsWillem/castle_game_project/blob/main/client/public/images/material-cards.png?raw=true)

Your opponent can **sabotage** your material cards by using an **attack card**. These attacks are:
- Bankruptcy to sabotage Money;
- Fire to sabotage Wood;
- Shortage to sabotage Stone;
- Frost to sabotage Mortar;
- Plague to sabotage Labour.

![](https://github.com/PrinsWillem/castle_game_project/blob/main/client/public/images/attack-cards.png?raw=true)

Luckily you have **defence cards** that you can use to thwart the enemies attack on your materials. These defence cards include:
- Loan to defend against Bankruptcy;
- Water to defend against Fire;
- Quarry to defend against Shortage;
- Thaw to defend against Frost;
- Apothecary to defend against Plague.

![](https://github.com/PrinsWillem/castle_game_project/blob/main/client/public/images/defence-cards.png?raw=true)

If an attack is successful and the player has no defence, the material card that was attacked is discarded along with the attack card used by your opponent.

If the player has a defence card to protect his materials, then both the defence and attack cards are discarded and the material card stays in play.

### Walkthrough

At the start of the game each player gets 5 cards in hand.

Each turn a player must play a card on the table and draws a new card. If a player has no cards to play he must discard one from their hand.

## Brief
Text

## Technologies
The project was created with:
- JavaScript;
- React;
- Node.js;
- MongoDB;
- Insomnia;
- HTML/CSS.

## Setup
> Clone github repository

> Open repository in Visual Studio Code

navigate into your server folder via vscode terminal and after run the next command to fill the database
```
npm run seeds 
```

To start the server run the next command in your vscode terminal
```
npm run server:dev
```

> To check if the server runs the api correctly you can go to http://localhost:5000/api/cards in your browser

To start te game go to client folder via vscode terminal and after run the next command to start the game
```
npm start
```

> The browser should open automaticly, if not you can go to http://localhost:3000 in your browser
