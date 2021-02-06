/*
New variables in JavaScript are declared using one of three keywords: let, const, or var.

let allows you to declare block-level variables. The declared variable is available from the block it is enclosed in.
*/

let a;
let name = 'Simon';

// The following is an example of scope with a variable declared with let:

// myLetVariable is *not* visible out here
for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}
// myLetVariable is *not* visible out here


// const allows you to declare variables whose values are never intended to change. The variable is available from the block it is declared in.

const Pi = 3.14; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant variable.

/*
var is the most common declarative keyword. It does not have the restrictions that the other two 
keywords have. This is because it was traditionally the only way to declare a variable in JavaScript. 
A variable declared with the var keyword is available from the function it is declared in.
*/

var a;
var name = 'Simon';