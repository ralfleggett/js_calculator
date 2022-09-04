// Function parameters are pass by value, except objects (incl arrays)

// Functions are objects (`Function`) and have their own methods

// Can nest functions; nested functions can access all variables in the
// outer function (forms a 'closure')

// Can hoist function declarations, but not function expressions
console.log(square(5));
function square(number) {
    return number * number;
}

/*===========================================================================*
 *                           Function expressions:                           *
 *===========================================================================*/
const squared = function (number) {
    return number * number;
}
const x = squared(4); // x gets the value 16

// Can provide a name in this syntax, which makes debugging stack traces 
// easier, and allows for recursion:
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
}

// Convenient when passing a function as an argument, e.g. with map
const f = function (x) {
    return x * x * x;
}
const numbers = [0, 1, 2, 5, 10];
const cube = numbers.map(f);
console.log(cube);

// Can define functions based on a condition:
let myFunc;
if (numbers[0] === 0) {
    myFunc = function (theObject) {
        theObject.make = 'Toyota';
    }
}

// Can use `Function` constructor to make functions from strings at runtime
// like `eval()`, but generally not advised

/*===========================================================================*
 *                                 Closures:                                 *
 *===========================================================================*/
// Inner functions (in a nesting sense) have full access to all vars and funcs 
// defined in the outer function, but the reverse is not true.

// Since the inner function has access to the outer function's vars and funcs,
// these will live longer than the duration of the outer function execution if
// the inner function survives beyond the life of its containing function
const pet = function (name) {   
    // The outer function defines a variable "name"
    const getName = function () {
      // The inner function has access to the "name" variable
      return name;
    }
    // Return the inner function, thereby exposing it to outer scopes
    return getName; 
  }
  const myPet = pet('Vivie');
  
  console.log(myPet()); // Returns "Vivie"

/*===========================================================================*
 *                                Arguments:                                 *
 *===========================================================================*/
// **Array-like** `arguments` object contains arguments of function
// Can use to call a function with more arguments than it is formally declared
// to accept
function sum() {
    function f(acc, curr) {
        return acc + curr;
    }
    return Array.prototype.reduce.call(arguments, f);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Can set default parameters as usual
function multiply(a, b = 1) {
    return a * b;
}

// Rest parameter syntax allows an indefinite number of arguments as an array
function sum2(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr);
}
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/*===========================================================================*
 *                             Arrow functions                               *
 *===========================================================================*/
// Don't have their own `this`, `arguments`, `super`, or `new.target`
// Always anonymous

// Every function defines its own `this` value, which can be annoying with OOP
function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;
  
    setInterval(function growUp() {
      // In nonstrict mode, the growUp() function defines `this`
      // as the global object, which is different from the `this`
      // defined by the Person() constructor.
      this.age++;
    }, 1000);
}

// The 'old' style fix
function Person() {
    const self = this; // Some choose `that` instead of `self`.
                       // Choose one and be consistent.
    self.age = 0;
  
    setInterval(function growUp() {
      // The callback refers to the `self` variable of which
      // the value is the expected object.
      self.age++;
    }, 1000);
}

// With arrow function
function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // `this` properly refers to the person object
    }, 1000);
}

/*===========================================================================*
 *                           Predefined functions                            *
 *===========================================================================*/
// `eval()` evaluates JavaScript code in a string

// `isFinite()` determines if the passed value is a finite number (converting
// to a number first if needed)

// `isNaN()` determines if value is NaN. Note that coercion has some 
// interesting results:
isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false
isNaN('');        // false
// Use Number.isNaN(), which additionally checks if the value is a Number

// `parseFloat()`

// `parseInt()`

// And more...