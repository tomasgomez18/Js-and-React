//seleccionar los elementos del dom
const boton = document.querySelector('button');
const color = document.getElementById('color');


//Crear funciones para generar los colores aleatorios
function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for ( let i = 0; i < 6; i++  ){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }
return colorHex;
}

//Agregar eventos 

boton.addEventListener('click', function () {
let colorAleatorio = generarColorHexAleatorio();
// Actualizar el texto
color.textContent = colorAleatorio;
//Actualizar color de fondo
document.body.style.backgroundColor = colorAleatorio;
});