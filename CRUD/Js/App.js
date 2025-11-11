import datosIniciales from '../data/data.js';
import { Gift } from './clases.js';
import { cargaDeDatos } from './funciones.js';

// Inicializa datos con la función de carga
let datos = cargaDeDatos() || [];

const cuerpoTabla = document.getElementById('cuerpo-tabla');
const myModal = new bootstrap.Modal(document.getElementById('modalGift'));
let idGiftUpdate = null;

window.mostrarModal = (id) => {
  idGiftUpdate = id;
  let index = datos.findIndex(item => item.id === id);
  
  if (index !== -1) {
    document.getElementById('giftModal').value = datos[index].gift;
    document.getElementById('tipoModal').value = datos[index].tipo;
    document.getElementById('tiempoModal').value = datos[index].tiempo;
    document.getElementById('precioModal').value = datos[index].precio;
    document.getElementById('imagenModal').value = datos[index].imagen;
    myModal.show();
  }
};

const giftUpdate = (event) => {
  event.preventDefault(); 
  let index = datos.findIndex(item => item.id === idGiftUpdate);

  if (index !== -1) {
    datos[index].gift = document.getElementById('giftModal').value;
    datos[index].tipo = document.getElementById('tipoModal').value;
    datos[index].tiempo = document.getElementById('tiempoModal').value;
    datos[index].precio = document.getElementById('precioModal').value;
    datos[index].imagen = document.getElementById('imagenModal').value;

    localStorage.setItem('datos', JSON.stringify(datos));
    cargarTabla();
    myModal.hide();
  }
};

const cargarTabla = () => {
  const datosActualizados = JSON.parse(localStorage.getItem('datos')) || datos;
  cuerpoTabla.innerHTML = '';
  
  datosActualizados.map(item => {
    const fila = document.createElement('tr');
    const celdas = `
      <td>${item.gift}</td>
      <td>${item.tipo}</td>
      <td>${item.tiempo}</td>
      <td>$${item.precio}</td>
      <td>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-warning" onclick="mostrarModal(${item.id})">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button class="btn btn-outline-danger" onclick="borrarGift(${item.id})">
            <i class="fa fa-times-circle" aria-hidden="true"></i>
          </button>
        </div>
      </td>
    `;
    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
};

const agregarGift = (event) => {
  event.preventDefault();
  let id = datos.length > 0 ? Math.max(...datos.map(item => item.id)) + 1 : 1;
  let gift = document.getElementById('gift').value;
  let tipo = document.getElementById('tipo').value;
  let tiempo = document.getElementById('tiempo').value;
  let precio = parseFloat(document.getElementById('precio').value);
  let imagen = document.getElementById('imagen').value;

  datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));
  
 
  document.getElementById('formGift').reset();
  localStorage.setItem('datos', JSON.stringify(datos));
  lo
  cargarTabla();
};

window.borrarGift = (id) => {
  let index = datos.findIndex(item => item.id === id);
  if (index !== -1) {
    let validar = confirm(`¿Estás seguro que deseas eliminar ${datos[index].gift}?`);
    if (validar) {
      datos.splice(index, 1);
      localStorage.setItem('datos', JSON.stringify(datos));
      localStorage.setItem('datos', JSON.stringify(datos));
      cargarTabla();
    }
  }
};
cargarTabla();

document.getElementById('formGift').addEventListener('submit', agregarGift);
document.getElementById('formModal').addEventListener('submit', giftUpdate);