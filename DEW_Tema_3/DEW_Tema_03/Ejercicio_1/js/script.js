function fecha() {

    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();

    var anioStr = String(anio).slice(-2);

alert("Hoy es " + dia + "/" + mes + "/" + anio);

}
