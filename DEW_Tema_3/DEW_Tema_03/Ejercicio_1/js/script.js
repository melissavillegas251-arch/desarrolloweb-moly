function fecha() {

    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();

    var diaStr = (dia < 10) ? "0" + dia : dia;
    var mesStr = (mes < 10) ? "0" + mes : mes;
    var anioStr = String(anioStr).slice(-2);

alert("Hoy es " + diaStr + "/" + mesStr + "/" + anioStr);

}
