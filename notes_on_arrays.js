// There are multiple ways of initialising an array but for simplicity:
const arr1 = [0, 1, 2, 3]; // with specified elements
const arr2 = new Array(4); // empty with non-zero length

// Can use property accessors to access properties of the array
console.log(arr1['length']);
console.log(arr2.length);

// Note: If you supply a non-integer value to the array operator, a property 
// will be created in the object representing the array, instead of an element.
const arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length); // 0
console.log(Object.hasOwn(arr, 3.4)); // true

// Updating the length property allows truncating the array
arr1.length = 2;
console.log(arr1);

// You can add elements beyond the array's length, the array will resize to 
// accommodate the new value
arr1[4] = 4;

// Arrays do not have to contain elements of only one type
const mixed_array = ['a', 1, {'name': 'Ralf'}];

/*=============================================================================
 *                                 Iterating                                 *
=============================================================================*/
console.log('----------')

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
console.log('----------')

// If none of the elements evaluate to false in a boolean context:
// (this doesn't work with arr1 cos 0 is falsy)
// Avoids overhead of checking array length, ensures elem is reassigned 
// in each loop
const obj1 = {'name': 'Ralf'};
const obj2 = {'name': 'Bob'};
const arr3 = [obj1, obj2];
for (let i = 0, elem; elem = arr3[i]; i++) {
    console.log(elem);
}
console.log('----------')

// Using the forEach() method:
const colors = ['red', 'green', 'blue'];
colors.forEach((color) => console.log(color));
console.log('----------')

// Note that empty array elements are omitted by forEach, but not manually
// assigned `undefined` values
const sparseArray = ['first', 'second', , 'fourth'];
sparseArray.forEach((element) => {
  console.log(element);
});
console.log('----------')

const nonsparseArray = ['first', 'second', undefined, 'fourth'];
nonsparseArray.forEach((element) => {
  console.log(element);
});
console.log('----------')

// NOT advisable to use for...in loops which is used to enumerate over object
// properties as it will loop over properties of the array object and is slow

// for...of
// May not work for older browsers
for (const n of arr1) {
    console.log(n);
}
console.log('----------')

/*=============================================================================
 *                                  Methods                                  *
=============================================================================*/

// ----------------------------------------------------------------------------
// concat()
// ----------------------------------------------------------------------------
// Joins 2+ arrays and returns a new array
let myArray = ['1', '2', '3'];
myArray = myArray.concat('a', 'b', 'c');
// myArray is now ["1", "2", "3", "a", "b", "c"]

// ----------------------------------------------------------------------------
// join(delimiter = ',') 
// ----------------------------------------------------------------------------
// Joins all elements of an array into a string.
myArray = ['Wind', 'Rain', 'Fire'];
const list = myArray.join(' - '); // list is "Wind - Rain - Fire"

// ----------------------------------------------------------------------------
// push() 
// ----------------------------------------------------------------------------
// Adds 1+ elements to the end of an array and returns the new length.
myArray = ['1', '2'];
myArray.push('3'); // myArray is now ["1", "2", "3"]

// ----------------------------------------------------------------------------
// pop() 
// ----------------------------------------------------------------------------
// Removes the last element from an array and returns that element.
const last = myArray.pop(); // myArray is now ["1", "2"], last = "3"

// ----------------------------------------------------------------------------
// shift() 
// ----------------------------------------------------------------------------
// Removes the first element from an array and returns that element.
myArray = ['1', '2', '3'];
const first = myArray.shift();
// myArray is now ["2", "3"], first is "1"

// ----------------------------------------------------------------------------
// unshift()
// ---------------------------------------------------------------------------- 
// Adds 1+ elements to the front of an array and returns the new length.
myArray = ['1', '2', '3'];
myArray.unshift('-1', '0');
// myArray becomes ["-1", "0", "1", "2", "3"]

// ----------------------------------------------------------------------------
// slice(start_index, up_to_index)
// ----------------------------------------------------------------------------
// Extracts a section of an array and returns a new array.
myArray = ['a', 'b', 'c', 'd', 'e'];
myArray = myArray.slice(1, 4); // returns [ "b", "c", "d"]

// ----------------------------------------------------------------------------
// splice(index, count_to_remove, addElement1, addElement2, ...)
// ----------------------------------------------------------------------------
// Extracts a section of an array and returns a new array.
myArray = ['1', '2', '3', '4', '5'];
myArray.splice(1, 3, 'a', 'b', 'c', 'd');
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.

// ----------------------------------------------------------------------------
// reverse()
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// sort()
// ----------------------------------------------------------------------------
// In-place sort, returns sorted array
// Can take a callback function to compare elements; Function takes two values,
// returns -1 if a<b, 1 if a>b, 0 if a=b
const sortFn = (a, b) => {
    // Code to compare and return -1, 1 or 0
}

// ----------------------------------------------------------------------------
// indexOf(searchElement[, fromIndex])
// ----------------------------------------------------------------------------
// Searches for searchElement (optionally starting from index fromIndex) and 
// returns the index of the first match. Returns -1 if no match.
const arr4 = ['a', 'b', 'b', 'a'];
console.log(arr4.indexOf('b'));     // Returns 1
console.log(arr4.indexOf('b', 2));  // Returns 2 since it includes fromIndex
console.log(arr4.indexOf('b', 3));  // Returns -1

// ----------------------------------------------------------------------------
// lastIndexOf(searchElement[, fromIndex])
// ----------------------------------------------------------------------------
// Same but starts at the end and searches backwards.

// There are various methods to apply a function to the array, e.g. map, filter
// every, some, reduce and reduceRight
// There are other methods not listed too.

/*=============================================================================
 *                               Sparse Arrays                               *
=============================================================================*/
// Empty elements ignored in array iteration methods (e.g. map, filter)
// Listed as `undefined` when indexed, or when using for...of
// Included when spreading: (here, resulting in NaN)
arr1.length = 3;

function sum(x, y, z) {
    return x + y + z;
}

console.log(sum(...arr1));

/*=============================================================================
 *                                   Other                                   *
=============================================================================*/
// Can create multi-dimensional arrays

// Can add properties to arrays to store related information, like objects

// Array-like objects may not share all the methods arrays have so we can't 
// call them directly, but we can using Function.prototype.call(), e.g.
Array.prototype.forEach.call('an example array-like', (chr) => {
    console.log(chr);
});