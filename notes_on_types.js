/*===========================================================================*
 *                                 T Y P E S                                 *
 *===========================================================================*/

// Single line comment
/* Multi-line
 * comment
 */

/* VARIABLE NAMES
 * A JavaScript identifier usually starts with a letter, underscore (_), or 
 * dollar sign ($). Subsequent characters can also be digits (0–9). Because 
 * JavaScript is case sensitive, letters include the characters A through Z 
 * (uppercase) as well as a through z (lowercase).
 */

// NOT block-scoped, local to function / global scope the block is in
var x;
var y = 42;

// Block-scoped, local variable:
let z;

/* Block-scoped, read-only
 * Properties of const objects and contents of const arrays are NOT protected
 */
const PI = 3.14;

const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';
console.log(MY_OBJECT);

const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); // logs ['HTML','CSS','JAVASCRIPT'];

console.log(y);

// Note these are backticks, this is called a template literal
console.log(`The value of pi is ${PI}`);

// undefined is false in boolean context, NaN in numeric
if (x === undefined) {
    console.log('x is undefined');
} else {
    console.log('x has a value');
}

// null is false in boolean context, 0 in numeric
const n = null;

/* Variable hoisting: can refer to a variable declared later w/o an exception
 * Hoisted `var` are initialised to `undefined`
 * Hoisted `let` and `const` are not initialised (give `ReferenceError`)
 */

/* Function hoisting: function declarations are hoisted, function expressions
 * are not
 */

// Function declaration
foo();

function foo() {
    console.log('bar');
  }

// Function expression 
// baz(); // Throws `TypeError`

var baz = function() {
    console.log('bar2');
  };

/* Global variables: In web pages, the global object is window, so you can 
 * set and access global variables using the `window.variable` syntax.
 */

/* Data types: The latest ECMAScript standard defines eight data types:
 *
 * Seven data types that are primitives:
 *   Boolean. true and false.
 *   null. Keyword denoting a null value (case-sensitive). 
 *   undefined. A top-level property whose value is not defined.
 *   Number. An integer or floating point number. e.g.: 42 or 3.14159.
 *   BigInt. An integer with arbitrary precision. e.g.: 9007199254740992n.
 *   String. A sequence of characters. e.g.: "Howdy".
 *   Symbol. A data type whose instances are unique and immutable.
 * and Object
 * 
 * JavaScript is dynamically typed so types are converted as-needed during 
 * execution
 */

// + concatenates, numeric converted to strings
var s = '37' + 7;
console.log(s)

// -, * does not convert numeric to string
s = '37' - 7;
console.log(s)

// parseInt(string, radix)
console.log(parseInt('101', 2));
console.log(parseInt('101', 10));
console.log(parseFloat('1.01'));
console.log(+'101'); // also converts number to string
console.log(+'1.01');

/* Literals: fixed values, not variables */

/* Array literals: expressions enclosed in []. 
 * Final comma is ignored; good practice to have a comma after final element
 * for git diff reasons.
 * Unspecified elements are empty slots and are skipped in array-traversing
 * methods; returned as `undefined` when index-accessed; good practice to
 * explicitly declare missing elements as undefined.
 */
const a = ['Lion', , 'Fish',];
console.log(a);
console.log(a[1]);

// Boolean literals are `true` and `false`

/* Numeric literals:
 * Decimal literals do not have a leading `0` (zero)
 * Leading `0` or `0o` or `0O` indicates octal (better to use `0o` since BigInt
 * literals do not work with just a leading zero)
 * Leading `0x` or `0X` indicates hexadecimal
 * Leading `0b` or `0B` indicates binary
 * Trailing `n` suffix indicates a BigInt literal#
 * 
 * Floating point literals written [digits].[digits][(E|e)[(+|-)]digits]
 * e.g. 3.1415926    .123456789    3.1E+12    .1e-23
 */

// Object literals are 0+ pairs of property names and values in {} e.g. 
const car = {brand: 'Ford', model: 'Fiesta'};
console.log(car.brand);
console.log(car['brand']); // use if name is not a valid identifier

// RegExp literals are patterns enclosed in slashes `/`

// String literals:
const str = 'This \
is \
a \
multi-line \
string'; // multi-line string literals need backslashes
const str2 = `so
is
this`; // multi-line template literals do not