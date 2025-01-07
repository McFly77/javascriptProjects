const id =  100;

// equal to
/*if(id == 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}*/

//logical operator

const name = 'Martin';
const age = 13;

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 18) {
  console.log(`${name} is a teenager.`)
} else {
  console.log(`${name} is an adult`)
}

// && AND
// || OR

//Ternary operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');