fetch('../data/data.json')
  .then(res => res.json())
  .then(datos => {
    console.log(datos);

    const cuerpoTabla = document.querySelector('#cuerpo-tabla');

    const cargarTabla = () => {
      datos.map(item => {
        const fila = document.createElement('tr');
        const celdas = `
          <th>${item.gift}</th>
          <th>${item.tipo}</th>
          <th>${item.tiempo}</th>
          <th>$${item.precio}</th>
        `;
        fila.innerHTML = celdas;
        cuerpoTabla.append(fila);
      });
    };

    cargarTabla(); 
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });

import { Gift } from './clases.js';