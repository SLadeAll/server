import Person from './person.js';

var row=1;
var boton = document.querySelector('.btn');
  boton.addEventListener('click',setName);

function setName() {

  var bDate = document.querySelector('#bornDate').value;
  bDate = bDate.split('-');
  var bDate = document.querySelector('#bornDate').value;
 bDate = bDate.split('-');
 var borndate = new Date(bDate[0], bDate[1],bDate[2]);
 var name = document.querySelector('#name').value;
 var lastname = document.querySelector('#lastName').value;
 var gender = document.querySelector('#gender').value;

 var person = new Person(name,lastname,borndate,gender);

  document.querySelector('#num'+row).textContent = (row);
  document.querySelector('#nombre'+row).textContent = person.name;
  document.querySelector('#apellido'+row).textContent = person.lastName;
  document.querySelector('#fecha'+row).textContent = person.getPrettyDate();
  document.querySelector('#genero'+row).textContent = person.gender;
  document.querySelector('#age'+row).textContent = person.getAge();
  if (person.isAdult()) {
    document.querySelector('#adult'+row).textContent = 'Si';
  }
  else {
    document.querySelector('#adult'+row).textContent = 'No';
  }
row++;
}
