console.log(3 / 2);             // 1.5, not 1
console.log(Math.floor(3 / 2)); // 1

Math.sin(3.5);
var circumference = 2 * Math.PI * r;

// Second parameter is the base of conversion
parseInt('123', 10); // 123
parseInt('010', 10); // 10


// Here, we see the parseInt() function treat the first string as octal due to the leading 0, 
// and the second string as hexadecimal due to the leading "0x". 
// The hexadecimal notation is still in place; only octal has been removed.
parseInt('010');  //  8
parseInt('0x10'); // 16

// If you want to convert a binary number to an integer, just change the base:
parseInt('11', 2); // 3

// You can also use the unary + operator to convert values to numbers:
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16

// A special value called NaN (short for "Not a Number") is returned if the string is non-numeric:
parseInt('hello', 10); // NaN

// You can test for NaN using the built-in isNaN() function:
isNaN(NaN); // true

// JavaScript also has the special values Infinity and -Infinity:
 1 / 0; //  Infinity
-1 / 0; // -Infinity

// You can test for Infinity, -Infinity and NaN values using the built-in isFinite() function:
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false