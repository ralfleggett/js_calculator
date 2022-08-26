var x;
const obj = {};

//-----------------------------------------------------------------------------
// Assignment operators
//-----------------------------------------------------------------------------
x = 1;
x += 1;
x **= 2; // etc.
console.log(x);

obj.x = 3;
console.log(obj);

const foo = ['one', 'two', 'three'];
const [one, two, three] = foo; // deconstructing
console.log(one);

// Chaining assignments in the same statement is discouraged
// e.g. y = x = f();

//-----------------------------------------------------------------------------
// Comparison operators
//-----------------------------------------------------------------------------
// If the two operands are not the same type, JavaScript usually tries to
// convert them to an appropriate type for comparison (generally numerically)
// ===, !== are exceptions and perform STRICT equality / inequality comparisons

//-----------------------------------------------------------------------------
// Arithmetic operators
//-----------------------------------------------------------------------------
console.log(5 % 2); // remainder
console.log(++x);   // increment, can be pre- or post-fix
console.log(-x);    // unary negation
console.log(+"2");  // unary plus attempts to convert operand to a number

// Bitwise operators as standard

// Logical operators as standard, incl. short-circuit evaluation

// Can use operators with BigInt too, except unsigned right shift >>>

// Cannot mix BigInts and numbers in calculations, but can convert them
const number = Number(1n) + 2;
const bigint = 1n + BigInt(2); 
console.log(number);
console.log(bigint);

// Can compare BigInts with numbers
console.log(1n > 2);

//-----------------------------------------------------------------------------
// String operators
//-----------------------------------------------------------------------------
console.log('foo' + 'bar');
var str = 'foo';
str += 'bar';
console.log(str);

//-----------------------------------------------------------------------------
// Ternary operator
//-----------------------------------------------------------------------------
var age = 16;
console.log(age >= 18 ? 'adult' : 'minor');
age += 2;
console.log(age >= 18 ? 'adult' : 'minor');

//-----------------------------------------------------------------------------
// Comma operator
//-----------------------------------------------------------------------------
// Evaluates both of its operands and returns the value of the last operand
var y = 10;
x = 1;
var comma_demo = (++x, ++y);
console.log(comma_demo);

// Primarily used in for loops to allow updating multiple variables at a time
const b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [b, b, b, b, b];
for (let i = 0, j = 9; i <= j; i++, j--) {
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}

//-----------------------------------------------------------------------------
// Unary operators
//-----------------------------------------------------------------------------
// `delete` removes an object's property
console.log(obj);
delete obj.x;
console.log(obj);

// can technically `delete` an array element, but don't! Replace with 
// `undefined` or use an array method e.g. `splice`

// `typeof` returns a string describing the type of the operand
console.log(typeof obj);
console.log(typeof bigint);
console.log(typeof null);

// `void` evaluates the expression w/o returning a value. Surround expression
// with parentheses
console.log(x);
void (x++);
console.log(x);

//-----------------------------------------------------------------------------
// Relational operators
//-----------------------------------------------------------------------------
// `in` returns true if the specified property is in the specified object
console.log('x' in obj);

const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
console.log(0 in trees);        // returns true
console.log('bay' in trees);    // returns false (you must specify the index 
                                // number, not the value at that index)
console.log('length' in trees); // returns true (length is an Array property)

// `instanceof` returns true if the object is of the specified object type
console.log(obj instanceof Object);
// Use when needing to confirm the type of an object at runtime. e.g., when 
// catching exceptions, branch to different exception-handling code depending 
// on the type of exception thrown. 

//-----------------------------------------------------------------------------
// Basic expressions
//-----------------------------------------------------------------------------
// `this`: refers to current object
// () grouping operator
// `new`
// `super`