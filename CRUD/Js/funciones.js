import datos from '../data/data.js';

export const cargaDeDatos = () => {
    const baseDeDatos = JSON.parse(localStorage.getItem('datos'));
    
    // Si no hay datos en localStorage, carga los datos iniciales
    if (!baseDeDatos) {
        localStorage.setItem('datos', JSON.stringify(datos));
        return datos;
    }
    return baseDeDatos;
};