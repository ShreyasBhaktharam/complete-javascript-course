//jshint esversion:8

(function() {
    'use strict';
}());

//Scoping and the scope chain

/*function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            let millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reasssigning outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);


        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

/*Hoisting and TDZ (Temporal Dead Zone)*/

//Hoisting variables
// In this case, the TDZ begins at the begining of the scope(in this case the global scope)
// and ends at the point the variable is defined.
//console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

//Hoisting function declarations, function expressions and arrow functions

//console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

//Here, we are able to access only the function declartion before it's initialisation
// The function expression and the arrow function are in the TDZ and cannot be accessed.


// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;

//Example

//Here numProducts will be undefined as the var variables are undefined after hoisting and can 
// be accessed before it's initialised. This method can lead to bugs and using var is not recommended
// if (!numProducts) {
//     deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log("All products deleted!");
// }

//Example 

// var x = 1;
// let y = 2;
// const z = 3;

//We are testing whether x is a property of the window object. Only var variables can create
// a property on the global window object.
// console.log(x === window.x); //True
// console.log(y === window.y); //False
// console.log(z === window.z); //False

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    },
    greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();