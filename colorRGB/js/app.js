const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');
const textoRojo = document.getElementById ('texto-rojo');
const textoVerde = document.getElementById ('texto-verde');
const textoAzul = document.getElementById ('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

