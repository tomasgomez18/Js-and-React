let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.textContent = `"${citas[indiceAleatorio].texto}"`;
    autorElem.textContent = citas[indiceAleatorio].autor;
}

botonElem.addEventListener('click', cambiarCita);
cambiarCita(); // para mostrar una cita inicial