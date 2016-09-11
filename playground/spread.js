// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Dan', 'Jess'];
// var groupB = ['Mike'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var person2 = ['Jess', 33];
// Hi Andrew, you are 25

function greet(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...person2);



var names = ['Mike', 'Ben'];
var final = ['Dan', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
