import Movimientos from '../Examen/JS.js';




var row=1;
var boton = document.querySelector('.btn');
  boton.addEventListener('click',setInfo);

function setInfo() {


  var date = document.querySelector('#date').value;
  date = date.split('-');
  var date = new Date( date[0],  date[1], date[2]);
  var desc = document.querySelector('#Descripcion').value;
  var cant = document.querySelector('#monto').value;
  var select = document.querySelector('#departement').value;


  console.log(select);


  let tipo = document.querySelector('input[name=type]:checked').value;
console.log(tipo);
  if(date[0]=="dd" || date[1]=="mm"|| date[2]=="aaaa"|| desc==""|| cant==""){

        prompt("Error","Espacio vacio");

  }
  else {




  var mov = new Movimientos(date,tipo,cant,select,desc);
  var tip = mov.tipo;
  var departamento1 = mov.departamento;
  if (departamento1 == 1) {

    document.querySelector('#departamento'+row).textContent = ("Sistemas");
  }
  else if (departamento1 == 2){

    document.querySelector('#departamento'+row).textContent = ("Soporte Tecnico");
  }
  else if (departamento1 == 3) {

    document.querySelector('#departamento'+row).textContent = ("Atencion a Clientes");
  }
        document.querySelector('#type'+row).textContent = tip;

  var mont = mov.monto;
  var a = mov.getTiempo();
  console.log(a);
  mont = new Intl.NumberFormat("es-MX",{style: "currency", currency: "MXN"}).format(mont);
  document.querySelector('#num'+row).textContent=(row);
  document.querySelector('#fecha'+row).textContent = mov.getPrettyDate();
  document.querySelector('#cant'+row).textContent = mont;
  document.querySelector('#descripcion'+row).textContent = mov.descripcion;
  document.querySelector('#dife'+row).textContent = a;


row++;
  document.querySelector("#monto").value = ("");
  document.querySelector("#Descripcion").value = ("");
  document.querySelector('#date').value = ("yyyy-MM-dd");
  document.querySelector("#departamento").value = "1";


}
}
