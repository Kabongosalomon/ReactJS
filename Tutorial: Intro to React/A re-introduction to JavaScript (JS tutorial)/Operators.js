x += 5;
x = x + 5;

/*
You can use ++ and -- to increment and decrement respectively. These can be used as a prefix or postfix operators.

The + operator also does string concatenation:
*/
'hello' + ' world'; // "hello world"

If you add a string to a number (or other value) everything is converted into a string first. This might trip you up:

'3' + 4 + 5;  // "345"
 3 + 4 + '5'; // "75"
//  Adding an empty string to something is a useful way of converting it to a string itself.

// The double-equals operator performs type coercion if you give it different types, with sometimes interesting results:
123 == '123'; // true
1 == true; // true
// There are also != and !== operators.
// JavaScript also has bitwise operations. If you want to use them, they're there.