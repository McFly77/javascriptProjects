const name = 'Martin';
const age = 40;
const job = 'Web Developer';
const city = 'Quebec';

let html ;
// without template strings(ES5)


html = '<ul><li>Name: ' + name +'</li><li>Age: ' + age +'</li><li>Jon: ' + job +'</li></ul>';

html = '<ul>' + 
          '<li>' +
          name + 
          '</li>' +
          '<li>' +
          job + '</li></ul>'

// with template string

html = `
<ul>
   <li>
     ${name}
   </li>
   <li>
     ${age}
   </li>
   <li>
     ${job}
   </li>
   <li>
     ${2 + 2}
   </li>
   <li>
      ${age > 30 ? 'Over 30' : 'Under 30'}
   </li></ul>`;

document.body.innerHTML = html;