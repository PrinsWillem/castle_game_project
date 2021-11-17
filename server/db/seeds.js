use castle_game;
db.dropDatabase();
db.cards.insertMany([
  {
    "name": "Money",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/money.png"
  },
  {
    "name": "Money",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/money.png"
  },
  {
    "name": "Money",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/money.png"
  },
  {
    "name": "Money",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/money.png"
  },
  {
    "name": "Money",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/money.png"
  },
  {
    "name": "Wood",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/wood.png"
  },
  {
    "name": "Wood",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/wood.png"
  },
  {
    "name": "Wood",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/wood.png"
  },
  {
    "name": "Wood",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/wood.png"
  },
  {
    "name": "Wood",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/wood.png"
  },
  {
    "name": "Stone",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/stone.png"
  },
  {
    "name": "Stone",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/stone.png"
  },
  {
    "name": "Stone",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/stone.png"
  },
  {
    "name": "Stone",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/stone.png"
  },
  {
    "name": "Stone",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/stone.png"
  },
  {
    "name": "Labour",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/labour.png"
  },
  {
    "name": "Labour",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/labour.png"
  },
  {
    "name": "Labour",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/labour.png"
  },
  {
    "name": "Labour",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/labour.png"
  },
  {
    "name": "Labour",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/labour.png"
  },
  {
    "name": "Mortar",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/mortar.png"
  },
  {
    "name": "Mortar",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/mortar.png"
  },
  {
    "name": "Mortar",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/mortar.png"
  },
  {
    "name": "Mortar",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/mortar.png"
  },
  {
    "name": "Mortar",
    "type": "material",
    "plunder": "Plunder",
    "img": "./images/material/mortar.png"
  },
  {
    "name": "Bankruptcy",
    "attacks": "Money",
    "type": "attack",
    "img": "./images/attack/bankruptcy.png"
  },
  {
    "name": "Bankruptcy",
    "attacks": "Money",
    "type": "attack",
    "img": "./images/attack/bankruptcy.png"
  },
  {
    "name": "Bankruptcy",
    "attacks": "Money",
    "type": "attack",
    "img": "./images/attack/bankruptcy.png"
  },
  {
    "name": "Fire",
    "attacks": "Wood",
    "type": "attack",
    "img": "./images/attack/fire.png"
  },
  {
    "name": "Fire",
    "attacks": "Wood",
    "type": "attack",
    "img": "./images/attack/fire.png"
  },
  {
    "name": "Fire",
    "attacks": "Wood",
    "type": "attack",
    "img": "./images/attack/fire.png"
  },
  {
    "name": "Shortage",
    "attacks": "Stone",
    "type": "attack",
    "img": "./images/attack/shortage.png"
  },
  {
    "name": "Shortage",
    "attacks": "Stone",
    "type": "attack",
    "img": "./images/attack/shortage.png"
  },
  {
    "name": "Shortage",
    "attacks": "Stone",
    "type": "attack",
    "img": "./images/attack/shortage.png"
  },
  {
    "name": "Plague",
    "attacks": "Labour",
    "type": "attack",
    "img": "./images/attack/plague.png"
  },
  {
    "name": "Plague",
    "attacks": "Labour",
    "type": "attack",
    "img": "./images/attack/plague.png"
  },
  {
    "name": "Plague",
    "attacks": "Labour",
    "type": "attack",
    "img": "./images/attack/plague.png"
  },
  {
    "name": "Frost",
    "attacks": "Mortar",
    "type": "attack",
    "img": "./images/attack/frost.png"
  },
  {
    "name": "Frost",
    "attacks": "Mortar",
    "type": "attack",
    "img": "./images/attack/frost.png"
  },
  {
    "name": "Frost",
    "attacks": "Mortar",
    "type": "attack",
    "img": "./images/attack/frost.png"
  },
  {
    "name": "Loan",
    "defence": "Bankruptcy",
    "type": "defense",
    "img": "./images/defense/loan.png"
  },
  {
    "name": "Loan",
    "defence": "Bankruptcy",
    "type": "defense",
    "img": "./images/defense/loan.png"
  },
  {
    "name": "Loan",
    "defence": "Bankruptcy",
    "type": "defense",
    "img": "./images/defense/loan.png"
  },
  {
    "name": "Water",
    "defence": "Fire",
    "type": "defense",
    "img": "./images/defense/water.png"
  },
  {
    "name": "Water",
    "defence": "Fire",
    "type": "defense",
    "img": "./images/defense/water.png"
  },
  {
    "name": "Water",
    "defence": "Fire",
    "type": "defense",
    "img": "./images/defense/water.png"
  },
  {
    "name": "Quarry",
    "defence": "Shortage",
    "type": "defense",
    "img": "./images/defense/quarry.png"
  },
  {
    "name": "Quarry",
    "defence": "Shortage",
    "type": "defense",
    "img": "./images/defense/quarry.png"
  },
  {
    "name": "Quarry",
    "defence": "Shortage",
    "type": "defense",
    "img": "./images/defense/quarry.png"
  },
  {
    "name": "Apothecary",
    "defence": "Plague",
    "type": "defense",
    "img": "./images/defense/apothecary.png"
  },
  {
    "name": "Apothecary",
    "defence": "Plague",
    "type": "defense",
    "img": "./images/defense/apothecary.png"
  },
  {
    "name": "Apothecary",
    "defence": "Plague",
    "type": "defense",
    "img": "./images/defense/apothecary.png"
  },
  {
    "name": "Thaw",
    "defence": "Frost",
    "type": "defense",
    "img": "./images/defense/thaw.png"
  },
  {
    "name": "Thaw",
    "defence": "Frost",
    "type": "defense",
    "img": "./images/defense/thaw.png"
  },
  {
    "name": "Thaw",
    "defence": "Frost",
    "type": "defense",
    "img": "./images/defense/thaw.png"
  },
  {
    "name": "Carpenter",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/carpenter.png"
},
{
    "name": "Carpenter",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/carpenter.png"
},
{
    "name": "Blacksmith",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/blacksmith.png"
},
{
    "name": "Blacksmith",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/blacksmith.png"
},
{
    "name": "Mortar_Mixer",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/mortar_mixer.png"
},
{
    "name": "Mortar_Mixer",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/mortar_mixer.png"
},
{
    "name": "Mason",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/mason.png"
},
{
    "name": "Mason",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/mason.png"
},
{
    "name": "Stone_Mason",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/stone_mason.png"
},
{
    "name": "Stone_Mason",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/stone_mason.png"
},
{
    "name": "Digger",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/digger.png"
},
{
    "name": "Digger",
    "type": "tool",
    "value": 2,
    "img": "./images/tools/digger.png"
},
{
    "name": "13-Knot_Rope",
    "type": "tool",
    "value": 4,
    "img": "./images/tools/13-knot_rope.png"
},
{
    "name": "13-Knot_Rope",
    "type": "tool",
    "value": 4,
    "img": "./images/tools/13-knot_rope.png"
},
{
    "name": "13-Knot_Rope",
    "type": "tool",
    "value": 4,
    "img": "./images/tools/13-knot_rope.png"
},
{
    "name": "13-Knot_Rope",
    "type": "tool",
    "value": 4,
    "img": "./images/tools/13-knot_rope.png"
},
{
    "name": "13-Knot_Rope",
    "type": "tool",
    "value": 4,
    "img": "./images/tools/13-knot_rope.png"
},
{
    "name": "13-Knot_Rope",
    "type": "tool",
    "value": 4,
    "img": "./images/tools/13-knot_rope.png"
},
{
    "name": "Measuring_Rode",
    "type": "tool",
    "value": 6,
    "img": "./images/tools/measuring_rode.png"
},
{
    "name": "Measuring_Rode",
    "type": "tool",
    "value": 6,
    "img": "./images/tools/measuring_rode.png"
},
{
    "name": "Measuring_Rode",
    "type": "tool",
    "value": 6,
    "img": "./images/tools/measuring_rode.png"
},
{
    "name": "Wheelbarrow",
    "type": "tool",
    "value": 8,
    "img": "./images/tools/wheelbarrow.png"
},
{
    "name": "Wheelbarrow",
    "type": "tool",
    "value": 8,
    "img": "./images/tools/wheelbarrow.png"
},
{
    "name": "Treadwheel_Crane",
    "type": "tool",
    "value": 10,
    "img": "./images/tools/treadwheel_crane.png"
},
{
  "name": "Plunder",
  "type": "plunder",
  "img": "./images/special_cards/plunder.png"
},
{
  "name": "Plunder",
  "type": "plunder",
  "img": "./images/special_cards/plunder.png"
},
{
  "name": "Plunder",
  "type": "plunder",
  "img": "./images/special_cards/plunder.png"
},
{
  "name": "Plan",
  "type": "plan",
  "img": "./images/special_cards/plan.png"
},
{
  "name": "Plan",
  "type": "plan",
  "img": "./images/special_cards/plan.png"
},
{
  "name": "Plan",
  "type": "plan",
  "img": "./images/special_cards/plan.png"
},
{
  "name": "Plan",
  "type": "plan",
  "img": "./images/special_cards/plan.png"
},
{
  "name": "Plan",
  "type": "plan",
  "img": "./images/special_cards/plan.png"
},
{
  "name": "Plan",
  "type": "plan",
  "img": "./images/special_cards/plan.png"
},
{
  "name": "Plan",
  "type": "plan",
  "img": "./images/special_cards/plan.png"
}
]);