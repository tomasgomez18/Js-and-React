const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');


function agregarTarea(){
    if (input.value){
        let tareaNueva = document.createElement ('div');
        tareaNueva.classList.add('tarea');
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);
        let iconos = document.createElement ('div')
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);
        let editar = document.createElement('i')
        editar.classList.add('bi', 'bi-pencil')
        editar.addEventListener('click', editarTarea);

        iconos.append(completar, eliminar, editar);

        listaDeTareas.append(tareaNueva);
    }
    else{
        alert('Por favor ingresa una tarea');
}
}

function completarTarea(e){
    let tarea = e.target.parentElement.parentElement;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e){
    let tarea = e.target.parentElement.parentElement;
    tarea.remove();
}

   function editarTarea(e) {
    let tarea = e.target.parentElement.parentElement;
    let textoOriginal = tarea.querySelector('p');

    // Crear input con el texto actual
    let inputEditar = document.createElement('input');
    inputEditar.type = 'text';
    inputEditar.value = textoOriginal.innerText;

    // Reemplazar el <p> por el input
    tarea.replaceChild(inputEditar, textoOriginal);

    // Cambiar el ícono a guardar
    e.target.classList.remove('bi-pencil');
    e.target.classList.add('bi-save');

    // Asignar función para guardar
    e.target.removeEventListener('click', editarTarea);
    e.target.addEventListener('click', function guardarEdicion() {
        let nuevoTexto = inputEditar.value;
        let textoFinal = document.createElement('p');
        textoFinal.innerText = nuevoTexto;

        tarea.replaceChild(textoFinal, inputEditar);
        e.target.classList.remove('bi-save');
        e.target.classList.add('bi-pencil');

        // Restaurar evento original
        e.target.removeEventListener('click', guardarEdicion);
        e.target.addEventListener('click', editarTarea);
    });
};

boton.addEventListener('click', agregarTarea);
listaDeTareas.addEventListener('click', completarTarea);