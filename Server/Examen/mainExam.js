import Person from '../Examen/JS.js';

var row=1;
var boton = document.querySelector('.btn');
  boton.addEventListener('click',setInfo;

function setInfo() {


  var date = document.querySelector('#date').value;
  date = bDate.split('-');
 var date = new Date( date[0],  date[1], date[2]);
 var desc = document.querySelector('#Descripcion').value;
 var cant = document.querySelector('#monto').value;
 var serv = document.getElementById('#departamento').value;
 var tipo = $('input[name=type]:checked').val();


 var mov = new Movimientos(date,tipo,cant,serv,desc);
  document.querySelector('#num'+row).textContent=(row);
  document.querySelector('#fecha'+row).textContent = mov.fecha;
  document.querySelector('#cant'+row).textContent = mov.monto;
  document.querySelector('#descripcion'+row).textContent = mov.descripcion;
  document.querySelector('#cant'+row).textContent = mov.monto;
  document.querySelector('#departamento'+row).textContent = mov.departamento;
  document.querySelector('#diferecia'+row).textContent = mov.getTiempo();


row++;
}
