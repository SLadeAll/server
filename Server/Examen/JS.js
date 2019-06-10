class Movimientos {
  constructor(fecha, tipo, monto, departamento, descripcion) {

    this.fecha = fecha;
		this.tipo = tipo ;
		this.monto = monto;
		this.departamento = departamento;
    this.descripcion = descripcion;

  }


  getTiempo(){
    var dif = (Date.now() - this.fecha) / 1000;
		dif = dif/ (24 * 60 * 60); // dias

    var dif1=0;
    var dif2=0;
    var dif3=0;
    if (dif<30 && dif==1)
    {
      dif1 = dif;
      return Math.round(dif1) +" dia";
    }
    else if (dif<30 )
    {
      dif1 = dif;
      dif1 = Math.round(dif1);
      return  dif1 +" dias";
    }
    else if(dif>30 && dif<365)
    {
      dif2 = dif;
      dif2 = Math.round(dif2/30);
      return dif2+" meses";
    }
    else {
        dif3 = dif;
        dif3 = Math.round(dif/365);
      	return dif3+" años";
    }


  }

  getPrettyDate()
  {
    var month = this.fecha.getMonth();
    var mes;
    if (month==1) {
      mes = "Ene";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==2) {
      mes = "Feb";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==3) {
      mes = "Mar";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==4) {
      mes = "Abr";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==5) {
      mes = "May";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==6) {
      mes = "Jun";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==7) {
      mes = "Jul";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==8) {
      mes = "Ago";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==9) {
      mes = "Sep";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==10) {
      mes = "Oct";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==11) {
      mes = "Nov";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }
    else if (month==12) {
      mes = "Dic";
      var d = this.fecha.getDate()+'/'+
      mes+'/'+
      this.fecha.getFullYear();
      return d;
    }


  }

}
  export default Movimientos;
