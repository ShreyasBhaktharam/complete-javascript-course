'use strict';


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];

    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener("click", () => {
    const data = document.querySelector('textarea').value;
    const value = data.split('\n');
    //console.log(value);
    for (const [i, name] of value.entries()) {
        //console.log(i, name);
        const [firstName, lastName] = name.split('_');
        //console.log(firstName, lastName);
        //console.log(firstName, lastName);
        console.log(`${firstName.toLowerCase()} ${lastName.replace(lastName[0], lastName[0].toUpperCase())}${'✅'.repeat(i+1)}`);

    }

    //console.log(data.split('\n'));
});

//Strings

// const airline = 'TAP Air Portugal';
// const plane = 'A380';

// console.log(airline.slice(4)); //Air Portugal (Extraction will begin at index 4)
// console.log(airline.slice(4, 7)); // Air (Extraction begins at index 4 and ends at index 6)

// const checkMiddleSeat = function(seat) {
//     //B and E are middle seats
//     const s = seat.slice(-1);
//     s === 'B' || s === 'E' ? console.log('Middle seat') : console.log('Not a middle seat');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// //Boxing in JavaScript
// console.log(typeof new String('Shreyas')); //Object
// console.log(typeof new String('Shreyas').slice(1)); //String

// const passenger = 'jOnAs';
// console.log(passenger[0].toUpperCase() + passenger.toLowerCase().slice(1));

// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function(number) {
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));



/////////////////////////////////////////////
// Coding Challenge #3

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// const events = new Set(gameEvents.values());
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents.size);

// console.log(`An event happened, on average every ${90/gameEvents.size} minutes `);

// let str;
// for (const [key, value] of gameEvents) {
//     key <= 45 ? str = 'FIRST HALF' : str = "SECOND HALF";
//     console.log(`[${str} ${key}:${value}]`);
// }


//Maps
/* 
const rest = new Map();
//Add a key value pair to the map 
rest.set("name", "Classico Italiano");
rest.set(1, 'Bangalore');
console.log(rest.get("name"));

rest.delete(1);
rest.set("name", "Shreyas");
const arr = [1, 2];
rest.set(arr, "numbers");
console.log(rest);

//Convert Objects to Map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//Convert Map to Array (by spread operator)
console.log([...hoursMap]);
*/

/////////////////////////////////////////////
// Coding Challenge #2

/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//Prints each player along with their goal number
for (const [key, value] of Object.entries(game.scored)) {
    console.log(`Goal ${key} scored by ${value}`);
}

//Calculates the average odd of a goal being scored
let average = 0;
for (const [key, value] of Object.entries(game.odds)) {
    average += value;
}
console.log(average / Object.entries(game.odds).length);


//Prints the odd of victory of each team and in case of a draw
for (const [team, odds] of Object.entries(game.odds)) {
    team === 'x' ? console.log(`Odd of draw: 3.25`) : console.log(`${game[team]}: ${odds}`);
}

//Prints the players who scored a goal and the number of goals they scored
const objects = {};
for (const player of game.scored) {
    objects[player] ? objects[player]++ : objects[player] = 1;
    console.log(objects[player]);
}
console.log(objects);
*/

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu.entries()) {
//     console.log(item);
// }

// console.log(...menu.entries());

// const properties = Object.keys(restaurant.openingHours);
// console.log(...properties);

// for (const day of Object.keys(restaurant.openingHours)) {
//     //console.log(day);
// }

// for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
//     console.log(`On ${day}, we open at ${open} am`);
// }

//////////////////////////////////////////
/*
//Coding challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
      [
          'Neuer', //goalkeeper
          'Pavard',
          'Martinez',
          'Alaba',
          'Davies',
          'Kimmich',
          'Goretzka',
          'Coman',
          'Muller',
          'Gnarby',
          'Lewandowski',
      ],
      [
          'Burki', //goalkeeper
          'Schulz',
          'Hummels',
          'Akanji',
          'Hakimi',
          'Weigl',
          'Witsel',
          'Hazard',
          'Brandt',
          'Sancho',
          'Gotze',
      ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
  },
};

let [players1, players2] = game.players;

let [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];


let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
let { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function(...players) {
  console.log(`Number of goals = ${players.length}, Players = ${players}`);

};
//printGoals(...players1);
//printGoals(...player2);

team1 < team2 ?? console.log('Team 1 is more likely to win');
team2 < team1 ?? console.log('Tea, 2 is more likely to win');

*/

/*
//1) Destructuring 

//Spread becasue on right side of = 
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//Rest Pattern because on left side of =
//Rest element must alwasy be the last element of an array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekDay } = restaurant.openingHours;
console.log(sat, weekDay);

//2) Functions
const add = function(...addNumbers) {
    return addNumbers.reduce((a, b) => a + b, 0);

};
console.log(add(2, 3));
console.log(add(2, 3, 4, 5));

const x = [23, 5, 7];
//Spread the elements and then enter the add function to be compressed by the rest parameter
console.log(add(...x));

*/

/*
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Swapping values using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 values from a function
let [start, main1] = restaurant.order(2, 0);
console.log(start, main1);

//Nested Destructuring 
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/

/*
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//Default Values
const { menu = [], starterMenu = [], people = [] } = restaurant;
console.log(menu, starterMenu, people);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//Reasigning values of a and b using obj
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const { fri: { open, close } } = hours;
console.log(open, close);
*/