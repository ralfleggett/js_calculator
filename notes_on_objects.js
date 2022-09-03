// Objects are collections of properties (key-value pairs), values can be 
// functions (i.e. methods)

// Can add properties after creating an object
const myObj = new Object();
myObj.property = 'One way to set a property';
myObj['property2'] = 'Another way to set a property';
console.log(myObj);

// Cannot use .property if the name contains a space or hyphen, starts with
// a number, or is held in a variable. Also useful when names are dynamically
// determined (at runtime)

// Unassigned properties are `undefined`

// Can remove properties with `delete` keyword

/*===========================================================================*
 *                          Enumerating properties                           *
 *===========================================================================*/

// 'Own property names' means keys of object, excluding those in prototype 
// chain

// Iterating over enumerable properties of an object using for...in:
function showProps(obj, objName) {
    let result = '';
    for (const i in obj) {
        // obj.hasOwn is used to exclude properties from the object's prototype 
        // chain and only show "own properties"
        if (Object.hasOwn(obj, i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    console.log(result);
}

// Object.keys(myObj) returns an array with only the enumerable keys in the
// object, but not those in the prototype chain

// Object.getOwnPropertyNames(myObj) returns an array with all own string 
// property names, regardless if they are enumerable or not

// Can get 'hidden' properties (properties in the prototype chain which are not 
// accessible through the object, because another property has the same name 
// earlier in the prototype chain) using a custom function
function listAllProperties(myObj) {
    let objectToInspect = myObj;
    let result = [];
  
    while(objectToInspect !== null) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        objectToInspect = Object.getPrototypeOf(objectToInspect)
    }
  
    return result;
}

/*===========================================================================*
 *                             Creating objects                              *
 *===========================================================================*/

// ----------------------------------------------------------------------------
// Using initialisers
// ----------------------------------------------------------------------------
const car = {
    'make': 'Ford',
    'model': 'Fiesta'
}

// Identical object initialisers produce distinct objects that do NOT compare
// as equal
const car2 = {
    'make': 'Ford',
    'model': 'Fiesta'
}
console.log(car2 === car);

// ----------------------------------------------------------------------------
// Using constructor functions
// ----------------------------------------------------------------------------
// Use a capital initial letter to define the function
// Create an instance using `new`

function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Or as a class (which is syntactic sugar over constructor functions)
class CarClass {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

const myCar = new Car('Ford', 'Focus');
const myCar2 = new Car('Mazda', '3');

// ----------------------------------------------------------------------------
// Using Object.create()
// ----------------------------------------------------------------------------
// Allows choosing the prototype object without having to define a constructor
// function

// Animal properties and method encapsulation
const Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType() {  // Method which will display type of Animal
        console.log(this.type);
    }
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Output: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output: Fishes

/*===========================================================================*
 *                                Inheritance                                *
 *===========================================================================*/
// Object inherited from is the prototype, inherited properties in the
// `prototype` object of the constructor. All objects have a prototype, the 
// chain ends in `null`

// Can mutate any member of the prototype chain and even swap the prototype at
// runtime (but don't do this)

// .prototype is for instances
// .[[Prototype]] is the constructor function's own prototype

const o = {
    a: 1,
    b: 2,
    // __proto__ sets the [[Prototype]]. It's specified here
    // as another object literal.
    __proto__: {
        b: 3,
        c: 4,
    },
};
// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
// what that means later).
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

// When an inherited function is executed, the value of this points to the 
// inheriting object, not to the prototype object

// Can add a property to a previously defined object type using the prototype 
// property
Car.prototype.year = null;
myCar.year = 2010;
console.log(listAllProperties(myCar));
console.log(listAllProperties(myCar2)); // Note year is a property too

/*===========================================================================*
 *                                  Methods                                  *
 *===========================================================================*/
// Three ways to define
function functionName() {};
myObj.methodName = functionName;    // To existing object

// New object
const myObj2 = {
    val1: 1,
    val2: 2,

    myMethod: function(params) {
      // do something
    },
  
    // this works too!
    myOtherMethod(params) {
      // do something else
    },

    // Getters and setters have keywords
    get val1() {
        return this.val1;
    },

    set val1(newval) {
        this.val1 = newval;
    },
};

// Can add getters and setters afterwards using Object.defineProperties()
Object.defineProperties(myObj2, {
    val2: { 
        get() { return this.val2; }, 
        set(newval) {this.val2 = newval; },
    },
});