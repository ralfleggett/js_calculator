/* Note: var-declared variables are not block-scoped, but are scoped to the 
 * containing function or script, and the effects of setting them persist 
 * beyond the block itself. For example:
 */
var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2

// if, else if, else
if (x === 1) {
    console.log('x is 1');
} else if (x === 2) {
    console.log('x is 2');
} else {
    console.log('x is something else');
}

/* Falsy values (all others, incl objects evaluate to true):
 * false
 * undefined
 * null
 * 0
 * NaN
 * the empty string ("")
 */

// primitive booleans `true`, `false` not the same as Boolean object true 
// or false:
const b = new Boolean(false);
if (b) {
  // this condition evaluates to true
}
if (b == true) {
  // this condition evaluates to false
}

// switch
switch (x) {
    case 1:
        console.log('x is 1');
        break;
    case 2:
        console.log('x is 2');
        break;
    // …
    default:
        console.log('x is something else');
}
  