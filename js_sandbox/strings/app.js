const firstName = 'William';
const lastName = 'Johnson';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' +lastName;

// appending ad to a variable
val = 'Martin ';
val += 'Maimone';
val = 'Hello, my name is ' + firstName;

//escaping 
val = 'That\'s awesome, I can\'t wait';

// lenght 

val = firstName.length;

// concat

val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();

// index
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
val = firstName.charAt('2');

// get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);
val = firstName.slice(0, 4);

// split
const str = 'Hello my name is Martin';
val = str.split(' ');

//replace
val = str.replace('Martin', 'Jack');

// include
val = str.includes('Hello');

console.log(val);