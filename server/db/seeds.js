use castle_game;
db.dropDatabase();

db.cards.insertMany(
  {
    "material": [
        {
            "type": "Money",
            "value": 1,
            "img": "../../src/images/material/money.png"
        },
        {
            "type": "Wood",
            "value": 1,
            "img": "../../src/images/material/wood.png"
        },
        {
            "type": "Stone",
            "value": 1,
            "img": "../../src/images/material/stone.png"
        },
        {
            "type": "Labour",
            "value": 1,
            "img": "../../src/images/material/labour.png"
        },
        {
            "type": "Mortar",
            "value": 1,
            "img": "../../src/images/material/money.png"
        }
    ],
    "attack": [
        {
            "type": "Bankruptcy",
            "img": "../../src/images/attack/bankruptcy.png"
        },
        {
            "type": "Fire",
            "img": "../../src/images/attack/fire.png"
        },
        {
            "type": "Shortage",
            "img": "../../src/images/attack/shortage.png"
        },
        {
            "type": "Plague",
            "img": "../../src/images/attack/plague.png"
        },
        {
            "type": "Frost",
            "img": "../../src/images/attack/frost.png"
        },
        
    ],
    "defense": [
        { 
            "type": "Loan",
            "img": "../../src/images/defense/loan.png"
        },
        {
            "type": "Water",
            "img": "../../src/images/defense/water.png"
        },
        {
            "type": "Quarry",
            "img": "../../src/images/defense/quarry.png"
        },
        {
            "type": "Apothecary",
            "img": "../../src/images/defense/apothecary.png"
        },
        {
            "type": "Thaw",
            "img": "../../src/images/defense/thaw.png"      
        }
    ]
  }
);
