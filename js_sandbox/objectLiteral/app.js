var person = {
  firstName: 'Steve',
  lastName: 'Smith',
   age: 30,
   email: 'steve@aol.com',
   hobbies: [ 'music', 'sports'],
   adress: {
    city: 'Miami',
    state: "FL"
   },
   getBirthYear: function(){
    return 2025 - this.age;
   }

}

let val;

val = person;
val = person.hobbies[1];
val = person.adress;
val = person.getBirthYear();

console.log(val);