// for loops

// do while loops

// while loops

// for...in iterates over enumerable properties of an object 
// (don't use on arrays)

// for...of iterates ober iterable objects (e.g. Array, Map, Set)

const arr = [3, 5, 7];
arr.foo = 'hello';

for (const i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (const i of arr) {
  console.log(i); // logs 3, 5, 7
}

// labeled statements: provide an identifier to refer to (e.g. with `break` or
// `continue`)
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
    console.log('Outer loops: ', x);
    x += 1;
    z = 1;
    while (true) {
        console.log('Inner loops: ', z);
        z += 1;
        if (z === 10 && x === 10) {
            break labelCancelLoops; // breaks outer loop
        } else if (z === 10) {
            break;  // breaks inner loop
        }
    }
}
