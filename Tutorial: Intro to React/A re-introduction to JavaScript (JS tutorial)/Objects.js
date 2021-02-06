// There are two basic ways to create an empty object:

var obj = new Object();
var obj = {};

var obj = {
    name: 'Carrot',
    _for: 'Max', // 'for' is a reserved word, use '_for' instead.
    details: {
      color: 'orange',
      size: 12
    }
};

obj.details.color; // orange
obj['details']['size']; // 12

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Define an object
var you = new Person('You', 24);
// We are creating a new person named "You" aged 24.

// dot notation
obj.name = 'Simon';
var name = obj.name;

// bracket notation
obj['name'] = 'Simon';
var name = obj['name'];
// can use a variable to define a key
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')

/*
These are also semantically equivalent. 
The second method has the advantage that the name of the property is provided as a string, 
which means it can be calculated at run-time. However, 
using this method prevents some JavaScript engine and minifier optimizations being applied. 
It can also be used to set and get properties with names that are reserved words:
*/
obj.for = 'Simon'; // Syntax error, because 'for' is a reserved word
obj['for'] = 'Simon'; // works fine

// Starting in ECMAScript 2015, object keys can be defined by the variable using bracket notation upon being created.
{[phoneType]: 12345} 
var userPhone = {}; userPhone[phoneType] = 12345.