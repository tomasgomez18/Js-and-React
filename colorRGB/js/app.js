const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

function actualizarColor(r, g, b) {
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

inputRojo.addEventListener('input', () => {
    const rojo = inputRojo.value;
    textoRojo.textContent = rojo;
    actualizarColor(rojo, inputVerde.value, inputAzul.value);
});

inputVerde.addEventListener('input', () => {
    const verde = inputVerde.value;
    textoVerde.textContent = verde;
    actualizarColor(inputRojo.value, verde, inputAzul.value);
});

inputAzul.addEventListener('input', () => {
    const azul = inputAzul.value;
    textoAzul.textContent = azul;
    actualizarColor(inputRojo.value, inputVerde.value, azul);
});