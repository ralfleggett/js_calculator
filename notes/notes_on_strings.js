// Hexadecimal escape sequence: `\x`
console.log('\xA9');

// Unicode escape sequence: `\u`
console.log('\u00A9');

// String objects
// Wrapper for string primitive
const foo = new String('foo');
console.log(foo)
console.log(typeof foo);

// Can call `String` object methods on string literals -- Javascript converts
// literal to temporary object to call the method

// Use literals unless you specifically need String objects to avoid
// counterintuitive behaviour e.g. `eval` won't work on a string object

// Strings are immutable
const hello = 'hello';
hello[1] = 'E';
console.log(hello);

// Some rarer unicode values require two code units, so not advised to access
// individual code units with brackets. See String.fromCodePoint(), 
// String.prototype.codePointAt()

/*===========================================================================*
 *                              String methods                               *
 *===========================================================================*/

// charAt(), charCodeAt(), codePointAt(): 
// return character or character code at specified position

// indexOf(), lastIndexOf():
// return position / lat position of specified substring in string

// startsWith(), endsWith(), includes():
// true / false for specified string

// concat()

// split():
// converts String object into array of strings
console.log('This is a string'.split(' '));

// slice():
// extracts a section of a string and returns a new string

// substring(), substr():
// return specified subset of string

// match(), matchAll(), replace(), replaceAll(), search():
// regex methods

// toLowerCase(), toUpperCase()

// repeat():
// returns a string consisting of the elements of the object repeated n times

// trim():
// removes whitespace from the start and end of the string

/*===========================================================================*
 *                           Internationalisation                            *
 *===========================================================================*/

// `Intl` object provides language sensitive string comparison, number 
// formatting, and date and time formatting

// July 17, 2014 00:00:00 UTC:
const july172014 = new Date("2014-07-17");

const options = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
};
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;

// Local timezone vary depending on your settings
// In CEST, logs: 07/17/14, 02:00 AM GMT+2
// In PDT, logs: 07/16/14, 05:00 PM GMT-7
console.log(americanDateTime(july172014));

// ----------------------------------------------------------------------------

const gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 3 });

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                        { style: 'currency', currency: 'CNY' });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五

// There's also `Intl.Collator` for comparing and sorting strings