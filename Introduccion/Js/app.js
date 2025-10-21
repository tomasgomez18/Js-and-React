/* const contenedor = document.getElementById('contenedor');
console.log(contenedor); 

const titulo = document.getElementById('titulo');
console.log(typeof titulo) */


/* const toppings = document.getElementsByClassName('topping');
console.log(toppings)
 */

/* const misToppings = document.getElementsByTagName('li');
console.log(misToppings); */

/* const aceitunas = document.querySelector('#aceitunas');
console.log(aceitunas) */

/* const toppingsNaranja = document.querySelectorAll(' .fondo-naranja ');
console.log(toppingsNaranja); */

/* const primerTopping = document.querySelector('.topping'); */

//cambiando stilos con notacion de .
/* primerTopping.style.backgroundColor = 'blue';   */  //color de fondo
/* primerTopping.style.color='#6dff00'; */  //color de letra
/* primerTopping.style.textTransform = 'uppercase';  */ //tamano de texto

//acceder al texto 

/* const listsDeToppings = document.getElementById('lista-toppings');  */

//no devuelve espacios los espacios que contiene el elemento
/* console.log('>innerText'); */
/* console.log (listsDeToppings.innerText); */

//si devuelve espacios del texto que contiene el elemento
/* console.log('>textContent'); */
/* console.log(listsDeToppings.textContent); */

//devuelve la estructura interna del elemento html incluyendo las etiquetas
/* console.log('>innerHTML');
console.log(listsDeToppings.innerHTML) */

//Modificar el texto del contenido 
/* const titulo = document.getElementById('titulo');
titulo.innerText = 'Hola Tomas' */

//Modificar los atributos de un elemento 
/* const enlace = document.getElementsByTagName('a')
console.log(enlace [0].setAttribute('href', 'https://www.freecodecamp.org')); */

//Agregar, modificar o eliminar una clase 
/* const primerTopping = document.querySelector('.topping');     */
/* console.log(primerTopping.classList); */ //ver la clase 

//Agregar una clase y la agrege al css
/* primerTopping.classList.add('mi-clase');
console.log(primerTopping); */

//Verificar si un elemento posee una clase 
/* console.log(primerTopping.classList.contains('fondo-marron'));  */// devuelve true, si existe

//Eliminar una clase 
/* primerTopping.classList.remove('topping'); */

//crear un elemento 

/* const listaDeTopping = document.getElementById('lista-toppings');

const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron')
toppingNuevo.innerText = 'Queso Extra';
listaDeTopping.append(toppingNuevo);
listaDeTopping.appendChild() --agrega elementos html*/


/* const listaDeToppings = document.getElementById('lista-toppings)
listaDeToppings.parentElement  */


//eliminar un elemento
/* toppingNuevo.remuve(); */


const albahaca = document.getElementById('albahaca');

function mostrarClic (topping){
console.log(topping)
}

albahaca.addEventListener('click ', mostrarClic);