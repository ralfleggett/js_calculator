/** Error Objects
 * ----------------------------------------------------------------------------
 * `Error`: generic error
 * 
 * `EvalError`: error occured in global `eval()` function
 * 
 * `RangeError`: numeric variable or parameter outside valid range
 * 
 * `ReferenceError`: when dereferencing an invalid reference
 * 
 * `SyntaxError`
 * 
 * `TypeError`: variable / parameter not of a valid type
 * 
 * `URIError` when `encodeURI()` or `decodeURI()` are passed invalid params
 * 
 * `AggregateError` several errors wrapped in one
 * 
 * `InternalError`: error in JavaScript engine e.g. too much recursion
 * 
 * 
 * See also `DOMException` (occurs as a result of calling a method or 
 * accessing a property of a web API)
 */

// Can `throw` any expression, but best to use specifically created exception 
// types

try {
    // statements

    throw (new Error('Error message'));

} catch(err) {
    // exception handlers

    // err.name provides general class of Error
    // err.message provides a succinct error message
    // N.B. use console.error() to log in catch block
    console.error(e.name);
    console.error(e.message);

    // `err` only lasts for the duration of the catch block
} finally {
    // code that executes whether or not an exception is thrown

    // `return`s in here override `return`s and `throw`s in the try or catch 
    // blocks
}

// You can nest one or more try...catch statements.
// If an inner try block does not have a corresponding catch block:
// 1) it must contain a finally block, and
// 2) the enclosing try...catch statement's catch block is checked for a match.
