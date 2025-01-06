// create some array

const number = [43, 56, 23, 43, 76];
const numberTwo = new Array(22, 55, 34, 11, 10);

const fruits = ['apple', 'banana', 'orange', 'pear'];

const mixt = [ 'black', true, new Date, 78, {a:1, b:3}];


let val;

val = number.length;
// check if
val = Array.isArray(numberTwo);
//get a single value
val = number[3];
// insert
number[2] = 100;
//find index of value
val = number.indexOf(56);

//mutating arrays
number.push(250);
number.pop();
// add on to front
number.unshift(120);

// take off from the front
number.shift();

// splice from any places
//number.splice(1,3);
number.reverse();




// concatenate array
val = number.concat(numberTwo);

val = number.sort(function(x, y) {return x - y})

val = fruits.sort();

// find
function under50(num) {
  return num < 50;
}

val = number.find(under50);
console.log(number);
console.log(val);