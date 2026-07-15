function verImg(numero) {
const titulo = document.getElementById("titulo");
const img = document.getElementById("imgmar");

switch (numero) {
    case 1:
        titulo.innerHTML = "Machu Picchu";
img.src ="../imagenes/MP.jpg";
break;

case 2: 
        titulo.innerHTML = "Caral";
img.src ="../imagenes/Caral.jpg";
break;

case 3:   
        titulo.innerHTML = "Kuelap";
img.src ="../imagenes/Kuelap.jpg";
break;
}

}