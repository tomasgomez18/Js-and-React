import datos from '../data/data.js';
import { Gift } from './clases.js';

const cuerpoTabla = document.getElementById('cuerpo-tabla');
const myModal = new bootstrap.Modal(document.getElementById('modalGift'));
let idGiftUpdate = null;

window.mostrarModal = (id) => {
  idGiftUpdate = id;
  let index = datos.findIndex(item => item.id === id);
  document.getElementById('giftModal').value = datos[index].gift;
  document.getElementById('tipoModal').value = datos[index].tipo;
  document.getElementById('tiempoModal').value = datos[index].tiempo;
  document.getElementById('precioModal').value = datos[index].precio;
  document.getElementById('imagenModal').value = datos[index].imagen;
  myModal.show();
};

const giftUpdate = (e) => {
  e.preventDefault(); // ✅ corregido
  let index = datos.findIndex(item => item.id === idGiftUpdate);

  datos[index].gift = document.getElementById('giftModal').value;
  datos[index].tipo = document.getElementById('tipoModal').value;
  datos[index].tiempo = document.getElementById('tiempoModal').value;
  datos[index].precio = document.getElementById('precioModal').value;
  datos[index].imagen = document.getElementById('imagenModal').value;

  cargarTabla();
  myModal.hide();
};

const cargarTabla = () => {
  cuerpoTabla.innerHTML = '';
  datos.map(item => {
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
  let id = datos.at(-1)?.id + 1 || 1;
  let gift = document.getElementById('gift').value;
  let tipo = document.getElementById('tipo').value;
  let tiempo = document.getElementById('tiempo').value;
  let precio = parseFloat(document.getElementById('precio').value);
  let imagen = document.getElementById('imagen').value;

  datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));
  document.getElementById('formGift').reset();
  cargarTabla();
};

window.borrarGift = (id) => {
  let index = datos.findIndex(item => item.id === id);
  let validar = confirm(`¿Estás seguro que deseas eliminar ${datos[index].gift}?`);
  if (validar) {
    datos.splice(index, 1);
    cargarTabla();
  }
};

cargarTabla();

document.getElementById('formGift').addEventListener('submit', agregarGift);
document.getElementById('formModal').addEventListener('submit', giftUpdate);