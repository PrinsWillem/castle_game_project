use castle_game;
db.dropDatabase();

db.cards.insertMany([
  {
    "type": "material",
    "name": "Money",
      "value": 1,
      "img": "./images/material/money.png"
  },
  {
      "name": "Wood",
      "type": "material",
      "value": 1,
      "img": "./images/material/wood.png"
  },
  {
      "name": "Stone",
      "type": "material",
      "value": 1,
      "img": "./images/material/stone.png"
  },
  {
      "name": "Labour",
      "type": "material",
      "value": 1,
      "img": "./images/material/labour.png"
  },
  {
      "name": "Mortar",
      "type": "material",
      "value": 1,
      "img": "./images/material/mortar.png"
  },
  {
      "name": "Bankruptcy",
      "type": "attack",
      "img": "./images/attack/bankruptcy.png"
  },
  {
      "name": "Fire",
      "type": "attack",
      "img": "./images/attack/fire.png"
  },
  {
      "name": "Shortage",
      "type": "attack",
      "img": "./images/attack/shortage.png"
  },
  {
      "name": "Plague",
      "type": "attack",
      "img": "./images/attack/plague.png"
  },
  {
      "name": "Frost",
      "type": "attack",
      "img": "./images/attack/frost.png"
  },
  { 
      "name": "Loan",
      "type": "defense",
      "img": "./images/defense/loan.png"
  },
  {
      "name": "Water",
      "type": "defense",
      "img": "./images/defense/water.png"
  },
  {
      "name": "Quarry",
      "type": "defense",
      "img": "./images/defense/quarry.png"
  },
  {  
      "name": "Apothecary",
      "type": "defense",
      "img": "./images/defense/apothecary.png"
  },
  {
      "name": "Thaw",
      "type": "defense",
      "img": "./images/defense/thaw.png"      
  }
]);
