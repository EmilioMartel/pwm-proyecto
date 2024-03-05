let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());


//dias del mes actual
let aux = new Date();
var auxCurrentDate = {
    day: aux.getDay(),
    month: aux.getMonth(),
    year: aux.getFullYear()
}
var acd;
var groupMode = false;
/** CALENDARIO */

function writeMonth(month) {
    let html = '';

    function getFormattedDate(day, month, year) {
        return `${parseInt(day)}-${parseInt(month)}-${parseInt(year)}`;
    }
    

    function createDayElement(day, className = '') {
        return `<div id="day${getFormattedDate(day)}" class="calendar__item ${className}" onclick="abrirModal('${getFormattedDate(day)}')">
                    <div class="day d-flex justify-content-center">
                        ${day}
                    </div>
                </div>`;
    }


    function createLastDaysElement(day) {
        return createDayElement(day, 'calendar__last-days');
    }

    // Días del mes pasado visibles en el mes actual
    for (let i = startDay(); i > 0; i--) {
        const lastMonthDay = (monthNumber === 0) ? getTotalDays(11) - (i - 1) : getTotalDays(monthNumber - 1) - (i - 1);
        const acd = getFormattedDate(lastMonthDay, (monthNumber === 0) ? 12 : monthNumber, (monthNumber === 0) ? currentYear - 1 : currentYear);

        html += createLastDaysElement(acd);
    }

    // Días del mes actual
    for (let i = 1; i <= getTotalDays(month); i++) {
        html += `<div class="divTxtDayEvent calendar__item">${createDayElement(i)}</div>`;
    }


    // Días del próximo mes en el mes actual
    let j = 1;
    for (let i = lastDay(); i < 6; i++) {
        const day = (j < 10) ? "0" + j : j;
        const postMonth = (monthNumber + 2 < 10) ? "0" + (monthNumber + 2) : monthNumber + 2;
        let year = currentYear;

        if (postMonth > 12) {
            year++;
            postMonth = "01";
        }

        const acd = getFormattedDate(day, postMonth, year);

        html += createLastDaysElement(acd);
        j++;
    }

    // Inserta el HTML en el contenedor
    dates.innerHTML = html;
}


// Función para abrir el modal con eventos del día
function abrirModal(fecha) {
    // Obtener la fecha actual
    const fechaActual = new Date();

    // Formatear la fecha en el formato esperado (por ejemplo, "YYYY-MM-DD")
    const formattedDate = `${fechaActual.getFullYear()}-${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}-${fechaActual.getDate().toString().padStart(2, '0')}`;

    // Generar algunos eventos de ejemplo
    const eventosDelDia = [
        `Evento 1 el ${formattedDate}`,
        `Evento 2 el ${formattedDate}`,
        // Agrega más eventos según sea necesario
    ];
    eventModal(eventosDelDia);
}


const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {
        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastDay = () => {
    let last = new Date(currentYear, monthNumber, getTotalDays(monthNumber));
    return ((last.getDay()-1) === -1) ? 6 : last.getDay()-1;
}

const lastMonth = () => {
   
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }
    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }
    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);

const createEventButton = document.getElementById("showModal");
createEventButton.addEventListener("click", () => showModal());

const showModal = () => {
    const body = document.body;

    // Crea el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'miModal';
    modalContainer.className = 'modal';

    // Crea el contenido del modal
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-contenido';

    // Crea el encabezado h1
    const titulo = document.createElement('h1');
    titulo.textContent = 'Crear evento';


    // Configura el estilo del modal
    modalContainer.style.display = 'flex';
    modalContainer.style.flexDirection = 'column';
    modalContainer.style.alignItems = 'center';
    modalContainer.style.justifyContent = 'center';

    modalContent.style.width = '40%';
    modalContent.style.height = '70%';
    modalContent.style.backgroundColor = 'gray';
    modalContent.style.borderRadius = '10px';
    modalContent.style.padding = '20px';
    modalContent.style.color = '#fff';

    // Crea el formulario
    const formulario = document.createElement('form');
    formulario.id = 'eventoForm';

    // Campos del formulario
    const nombreInput = crearInput('Nombre');
    const diaInput = crearInput('Día', false, true);
    const horaInicioInput = crearInput('Hora de inicio', true);
    const horaFinInput = crearInput('Hora de finalización', true);
    const ubicacionInput = crearInput('Ubicación');

    // Desplegable Prioridad
    const prioridadSelect = crearSelect('Prioridad', ['Alta', 'Media', 'Baja']);

    // Desplegable Categoría
    const categoriaSelect = crearSelect('Categoría', ['Deportes', 'Educación', 'Trabajo', 'Ocio']);

    // Campo de notas
    const notasTextArea = document.createElement('textarea');
    notasTextArea.name = 'notas';
    notasTextArea.placeholder = 'Notas...';
    notasTextArea.rows = 4;

    // Crea un contenedor para los botones y aplica el estilo flex
    const botonesContainer = document.createElement('div');
    botonesContainer.style.display = 'flex';

    // Botones del formulario
    const cerrarModalBtn = crearBoton('Cerrar', function () {
        modalContainer.style.display = 'none';
    }, 'closeBtn'); // Pasar 'rojo' como clase extra para el botón rojo

    const aceptarModalBtn = crearBoton('Crear Evento', function () {
        // Lógica para aceptar el formulario, puedes personalizarla según tus necesidades
        alert('Formulario aceptado');
    });

    // Añade los botones al contenedor
    botonesContainer.appendChild(cerrarModalBtn);
    botonesContainer.appendChild(aceptarModalBtn);

    // Añade el contenedor de botones al formulario
    
    // Agrega elementos al formulario
    formulario.appendChild(titulo);
    formulario.appendChild(nombreInput);
    formulario.appendChild(diaInput);
    formulario.appendChild(horaInicioInput);
    formulario.appendChild(horaFinInput);
    formulario.appendChild(ubicacionInput);
    formulario.appendChild(prioridadSelect);
    formulario.appendChild(categoriaSelect);
    formulario.appendChild(notasTextArea);
    formulario.appendChild(botonesContainer);

    // Añade estilos al formulario
    formulario.style.display = 'flex';
    formulario.style.flexDirection = 'column';
    formulario.style.alignItems = 'center';
    formulario.style.justifyContent = 'center';
    formulario.style.height = '100%'

    // Añade el formulario al contenido del modal
    modalContent.appendChild(formulario);

    // Añade elementos al DOM
    modalContainer.appendChild(modalContent);
    body.appendChild(modalContainer);
};

// Función para crear un input con un estilo básico y validación de formato HH:MM
function crearInput(labelText, esHora = false, esFecha = false) {
    const div = document.createElement('div');

    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    
    if (esHora) {
        input.type = 'time';
        // Aplica la validación de formato HH:MM solo si es un campo de hora
        input.addEventListener('input', function () {
            if (!validarFormatoHora(input.value)) {
                input.setCustomValidity('El formato debe ser HH:MM');
            } else {
                input.setCustomValidity('');
            }
        });
    } else if (esFecha) {
        input.type = 'date';
    } else {
        input.type = 'text';
    }

    input.required = true; // Campo obligatorio

    // Estilos para colocar el label encima del input y añadir espacio vertical
    label.style.display = 'block';
    label.style.marginBottom = '5px'; // Ajusta según tus preferencias

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

// Función para validar el formato HH:MM
function validarFormatoHora(hora) {
    const formatoValido = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return formatoValido.test(hora);
}

// Función para crear un select con opciones y un estilo básico
function crearSelect(labelText, opciones) {
    const div = document.createElement('div');

    const label = document.createElement('label');
    label.textContent = labelText;

    const select = document.createElement('select');
    opciones.forEach(opcion => {
        const option = document.createElement('option');
        option.value = opcion;
        option.text = opcion;
        select.appendChild(option);
    });

    div.appendChild(label);
    div.appendChild(select);

    return div;
}

// Función para crear un botón con un estilo básico
function crearBoton(texto, onClickCallback, claseExtra = '') {
    const boton = document.createElement('button');
    boton.className = `customBtn ${claseExtra}`;
    boton.textContent = texto;

    // Agrega el evento clic al botón
    boton.addEventListener('click', onClickCallback);

    return boton;
}

function eventModal(eventosDelDia) {
    const body = document.body;

    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'miModal';
    modalContainer.className = 'modal';
    
    // Configura el estilo del modalContainer
    modalContainer.style.display = 'flex';
    modalContainer.style.flexDirection = 'column';
    modalContainer.style.alignItems = 'center';
    modalContainer.style.justifyContent = 'center';

    // Crear el contenido del modal
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-contenido';

    // Configurar estilos para modalContent
    modalContent.style.width = '40%';
    modalContent.style.height = '70%';
    modalContent.style.backgroundColor = 'gray';
    modalContent.style.borderRadius = '10px';
    modalContent.style.padding = '20px';
    modalContent.style.color = '#fff';

    // Crear un elemento de lista ul para los eventos
    const listaEventos = document.createElement('ul');

    // Iterar sobre los eventos del día y crear elementos li para cada evento
    eventosDelDia.forEach(evento => {
        const itemEvento = document.createElement('li');
        itemEvento.textContent = evento;
        listaEventos.appendChild(itemEvento);
    });

    // Agregar la lista de eventos al contenido del modal
    modalContent.appendChild(listaEventos);

    
    const cerrarModalBtn = crearBoton('Cerrar', function () {
        modalContainer.style.display = 'none';
    }, 'closeBtn');

    // Agregar el botón "Cerrar" al contenido del modal
    modalContent.appendChild(cerrarModalBtn);

    // Agregar el contenido del modal al contenedor
    modalContainer.appendChild(modalContent);

    // Agregar el modal al cuerpo del documento
    body.appendChild(modalContainer);

}





