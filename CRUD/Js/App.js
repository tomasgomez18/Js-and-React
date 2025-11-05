import datos from '../data/data.js';
import {Gift} from './clases.js'

const cuerpoTabla = document.getElementById('cuerpo-tabla');

const cargarTabla = () =>{
    cuerpoTabla.innerHTML = '';
    datos.map(item => {
        const fila = document.createElement('tr');
        const celdas = `  <td>${item.gift}</td>
      <td>${item.tipo}</td>
      <td>${item.tiempo}</td>   
      <td>$${item.precio}</td>
      <div class="d-flex gap-2">
      <button class="btn btn-outline-warning"><i class="fa fa-pencil" aria-hidden="true"></i></button>
      <button class="btn btn-outline-danger"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
      
      </div>`
        fila.innerHTML = celdas;
        cuerpoTabla.append(fila)
    });
}

const agregarGift = (event) =>{
    event.preventDefault();
    let id = datos.at(-1).id+1;
    let gift = document.getElementById('gift').value;
    let tipo = document.getElementById('tipo').value;
    let tiempo = document.getElementById('tiempo').value;
    let precio = parseFloat(document.getElementById('precio').value);
    let imagen = document.getElementById('imagen').value;

    datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));
    document.getElementById('formGift').reset();
    cargarTabla()



}

cargarTabla();

document.getElementById('formGift').addEventListener('submit', agregarGift);