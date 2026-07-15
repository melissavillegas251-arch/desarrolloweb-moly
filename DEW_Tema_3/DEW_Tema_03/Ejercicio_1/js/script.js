function fecha() {
    new Date();
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();

alert("Hoy es " + dia + "/" + mes + "/" + anio);

}
