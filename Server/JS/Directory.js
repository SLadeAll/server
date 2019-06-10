class Directory {
  constructor(table) {
    this.contactList = new Array();
    this.table = table;

  }
    add(person)
    {
      this.contactList.push(person);

      if(this.contactList.length===1){
        var head = this.table.createTHead();
        var rHead = head.insertRow(0);
        rHead.classList.add('tHead');
        rHead.insertCell(0).textContent= '';
        rHead.insertCell(1).textContent= 'Num';
        rHead.insertCell(2).textContent= 'Descripcion';
        rHead.insertCell(3).textContent= 'Departamento';
        rHead.insertCell(4).textContent= 'Tipo de Movimientos';
        rHead.insertCell(5).textContent= 'Monto';
        rHead.insertCell(6).textContent= 'Fecha';
        rHead.insertCell(7).textContent= 'Tiempo';

      }

      var row = this.table.insertRow(this.contactList.length);

      if(this.contactList.length%2===0){
        row.classList.add('rowPar');
      }
      row.insertCell(0).innerHTML='<img  src="../img/borrar.png" class="borrar">';
      row.insertCell(1).textContent = this.contactList.length;
      row.insertCell(2).textContent = person.name;
      row.insertCell(3).textContent = person.lastName;
      row.insertCell(4).textContent = person.getAge();
      row.insertCell(5).textContent = person.gender;


    }
}

export default Directory;
/*function setName()
{
  var bornDate = document.querySelector('#bornDate').value;
  var r = bornDate.split('-');
  var bDate = new Date(r[0],r[1]-1, r[2]);

  var name = document.querySelector('#name').value;
  var lastName = document.querySelector('#lastName').value;
  var gender = document.querySelector('#gender').value;

  var person = new Person(name, lastName, bDate, gender);

  document.querySelector('#name' + row).textContent = person.name;
  document.querySelector('#lastName' + row).textContent = person.lastName;
  document.querySelector('#bornDate' + row).textContent = person.getPrettyDate();
  document.querySelector('#gender' + row).textContent = person.gender;
  document.querySelector('#age' + row).textContent = person.getAge();

  if(person.isAdult())
  {
    document.querySelector('#adult' + row).textContent = 'Sí';
  }
  else
  {
    document.querySelector('#adult' + row).textContent = 'No';
  }

  row++;
}*/
