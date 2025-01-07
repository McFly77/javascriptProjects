

// function expression

const square = function(x){
  return x * x
};


//console.log(square(5));

// immidiately invokable function expresssion - IIFEs

(function(){
  console.log('IIFE ran');
})();

(function(name){
  console.log('IIFE ran ' + name);
})('Brad');


//MAP

const users = [
  { id: 1, name: 'John'},
  { id: 2, name: 'Bobby'},
  { id: 3, name: 'Sarah'}
];

const ids = users.map(function(user){
  return user.id + ' name of user ' + user.name ;
});

console.log(ids);

//foreach
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
})

const user = {
  fistName: 'John',
  lastName: 'Doe',
  age: 46
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}
