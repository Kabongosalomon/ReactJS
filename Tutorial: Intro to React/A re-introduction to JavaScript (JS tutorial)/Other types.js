/*
JavaScript distinguishes between null, which is a value that indicates a 
deliberate non-value (and is only accessible through the null keyword), 
and undefined, which is a value of type undefined that indicates an uninitialized variable — that is, 
a value hasn't even been assigned yet. We'll talk about variables later, 
but in JavaScript it is possible to declare a variable without assigning a value to it. If you do this, 
the variable's type is undefined. undefined is actually a constant.
*/

// You can perform this conversion explicitly using the Boolean() function:
/*
    1. false, 0, empty strings (""), NaN, null, and undefined all become false.
    2. All other values become true.

Boolean operations such as && (logical and), || (logical or), and ! (logical not) are supported;
*/
Boolean('');  // false
Boolean(234); // true