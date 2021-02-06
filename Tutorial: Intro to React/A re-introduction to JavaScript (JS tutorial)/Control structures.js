/*
JavaScript has a similar set of control structures to other languages in the C family. 
Conditional statements are supported by if and else; you can chain them together if you like:
*/

var name = 'kittens';
if (name == 'puppies') {
  name += ' woof';
} else if (name == 'kittens') {
  name += ' meow';
} else {
  name += '!';
}
name == 'kittens meow';

while (true) {
    // an infinite loop!
}
  
var input;
do {
input = get_input();
} while (inputIsNotValid(input));

for (var i = 0; i < 5; i++) {
// Will execute 5 times
}

//   JavaScript also contains two other prominent for loops: for...of

for (let value of array) {
    // do something with value
}

for (let property in object) {
// do something with object property
}

/*
The && and || operators use short-circuit logic, which means whether they will execute their 
second operand is dependent on the first. This is useful for checking for null objects 
before accessing their attributes:
*/
var name = o && o.getName();

// Or for caching values (when falsy values are invalid):
var name = cachedName || (cachedName = getName());

// JavaScript has a ternary operator for conditional expressions:
var allowed = (age > 18) ? 'yes' : 'no';

// The switch statement can be used for multiple branches based on a number or string:
switch (action) {
  case 'draw':
    drawIt();
    break;
  case 'eat':
    eatIt();
    break;
  default:
    doNothing();
}

/*
If you don't add a break statement, execution will "fall through" to the next level. 
This is very rarely what you want — in fact it's worth specifically labeling deliberate 
fallthrough with a comment if you really meant it to aid debugging:
*/

switch (a) {
    case 1: // fallthrough
    case 2:
        eatIt();
        break;
    default:
        doNothing();
}

// The default clause is optional. You can have expressions in both the switch 
// part and the cases if you like; comparisons take place between the two using the === operator:

switch (1 + 3) {
  case 2 + 2:
    yay();
    break;
  default:
    neverhappens();
}