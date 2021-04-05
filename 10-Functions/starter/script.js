(function() {
    'use strict';
})();

/* Closures */

// Closures make functions remember everything it can access in it's birthplace by the time it is created
// That is how it can retain the value of passengerCount

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();
booker();
booker();
booker();

// This log indicates the scope access in which closure is priority over the scope chain and global context
console.dir(booker);

let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    };
};

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    };
};

g();
f(); // 46

// Re-assigning f function
h();
f();

// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3; // 3 groups of passengers

    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups each with ${perGroup} passengers.`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);

};

boardPassengers(180, 3);

///////////////////////////////////////
/* Coding Challenge #2 */

(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.body.addEventListener("click", function() {
        header.style.color = 'blue';

    });
})();


/* Immediately Invoked Function Expressions */
// Implemented to ensure data protection and privacy by encapsulating data in the function scope

// Regular function:
// const runOnce = function() {
//     console.log("Regular function - This will never run again");
// };
// runOnce();

// // IIFE (like the use strict function in this file)
// // It is immediately invoked 
// (function() {
//     console.log("IIFE - this will never run again");
// })();







// call and apply (explicitily make the this keyword point to a particular object 

/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: ` ${this.iataCode}${flightNum}` });
    },


};

// lufthansa.book(239, 'Shreyas Bhaktharam');
// lufthansa.book(635, 'Rahul');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

};

const book = lufthansa.book;
//The call method makes the book function point to the eurowings function
//First argument is the object this points to. The other arguments are the same as the original function
// book.call(eurowings, 23, 'Shreyas Bhaktharam');
// console.log(eurowings);

// book.call(lufthansa, 239, 'John Smith');
// console.log(lufthansa);

//Apply method - works for an array of data (now obsolete)
// const flightData = [583, 'George'];
// book.apply(lufthansa, flightData);

//Instead use - book.call(lufthansa, ...flightData);

// Bind method 
// this keyword 'binds' itself to the eurowings object so that we don't need to explicitily call the object everytime the function is called
// bind returns a new function whereas call calls the function immediateley
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');
bookLH(23, 'Steven Williams');

// this keyword binds itself to the eurowings object with flight number 23
// Specifying arguments like this beforehand is called partial application
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Shreyas Bhaktharam');

// bind with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    this.planes++;
    console.log(this, this.planes);
};


// If you do not specify bind keyword, it will point to the button HTML tag making the button tag the this keyword
document.querySelector('.buy').addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application
// Equivalent code -
// const addTax = function(rate) {
//     return function(value) {
//        return value + value * rate;
//     };
// };
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//There is no this keyword so we specify the object to null
const addVAT = addTax.bind(null, 0.23);
//Equivalent to --> addVAT = value => value + value * 0.23;

console.log(addVAT(300));
console.log(addVAT(400));
*/


/////////////////////////////
/* Coding Challenge 1 */

// const poll = {
//     question: "Which is your favourite programming language?",
//     options: ["1: JavaScript", "2: Python", "3: Rust", "4: C++"],
//     answers: [1, 0, 2, 0],
//     registerAnswer() {
//         const answer = prompt(`${this.question}${this.options}\nEnter your option`);
//         if (typeof answer !== Number && answer > 0 && answer <= this.answers.length)
//             this.answers[answer - 1]++;
//         this.displayResults('array');
//     },

//     displayResults(type = 'array') {
//         if (type === 'string')
//             console.log(`Poll results are: ${[...this.answers]}`);
//         else if (type === 'array')
//             console.log(`Poll results are: ${this.answers}`);
//     },
// };

// document.querySelector('.poll').addEventListener("click", poll.registerAnswer.bind(poll));

// //Extra challenge
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });






/* Functions returning functions (opposite of callback functions) */

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greeterHey is basically the function retured by the function greet. So we can call it like any regular function
// It works because of closures (will learn later)
// const greeterHey = greet('Hey');
// greeterHey('Shreyas');
// greeterHey('Rahul');

//Calling everything in one go
// greet('Hello')('Shreyas');
// greet('Hello')('Rahul');

//Challenge







/* First-class function and higher-order function */

//First-class function
// const oneWord = function(str) {
//     // / /g replaces all 
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function (operates at a higher level of abstraction)
// const transformer = function(str, fn) {
//     console.log(`Original String: ${str}`);
//     console.log(`Transformed String: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);

// };

// //transformer is the higher-order function and upperFirstWord and oneWord are callback functions
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);




/* Value vs Reference */

// const flight = 'LH234';
// const jonas = {
//     name: 'Shreyas Bhaktharam',
//     passport: 3242342555
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 3242342555) {
//         alert("Checked In!");
//     } else {
//         alert("Wrong Passport!");
//     }
// };

// // Jonas is passed by reference to the function checkIn i.e a copy of the object is made
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);



/* Setting default parameters */

// const bookings = [];
// const createBooking = function(flightNum, numPassengers = 1, price = 19 * numPassengers) {

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     };

//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH124', 10, 500);
// //Similar to not specifying the number of passengers
// createBooking('BLR129', undefined, undefined);