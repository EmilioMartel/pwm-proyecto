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

/** CALENDARIO */

function writeMonth(month) {
    let html = '';

    function getFormattedDate(day, month, year) {
        
        return `${parseInt(day)}/${parseInt(month)}/${parseInt(year)}`;
    }
    

    function createDayElement(day, month, year, className = '') {
        return `<div id="day${getFormattedDate(day, month, year)}" class="calendar__item ${className}" onclick="abrirModal('${getFormattedDate(day, month, year)}')">
                    <div class="day d-flex justify-content-center">
                        ${day}
                    </div>
                </div>`;
    }


    function createLastDaysElement(day, nextMonth, nextYear) {
        return createDayElement(day, nextMonth, nextYear, 'calendar__last-days');
    }

    // Días del mes pasado visibles en el mes actual
    for (let i = startDay(); i > 0; i--) {
        const lastMonthDay = (monthNumber === 0) ? getTotalDays(11) - (i - 1) : getTotalDays(monthNumber - 1) - (i - 1);

        html += createLastDaysElement(lastMonthDay, (monthNumber === 0) ? 12 : monthNumber, (monthNumber === 0) ? currentYear - 1 : currentYear);
    }

    // Días del mes actual
    for (let i = 1; i <= getTotalDays(month); i++) {
        html += `<div class="divTxtDayEvent calendar__item">${createDayElement(i,(monthNumber === 0) ? 1 : monthNumber+1,currentYear)}</div>`;
    }


   // Días del próximo mes en el mes actual
    let j = 1;
    const nextMonthNumber = (monthNumber + 1) % 12; // Calcular el número del próximo mes (manejando el caso de diciembre)
    const nextYear = currentYear + Math.floor((monthNumber + 1) / 12); // Calcular el año del próximo mes

    for (let i = lastDay(); i < 6; i++) {
        const day = j;
        const nextMonth = nextMonthNumber + 1;

        html += createLastDaysElement(day, nextMonth, nextYear);
        j++;
    }

    // Inserta el HTML en el contenedor
    dates.innerHTML = html;
}

function getCurrentDate() {
    const fechaActual = new Date();
    const day = fechaActual.getDate();
    const month = (fechaActual.getMonth() + 1);
    const year = fechaActual.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;

}


// Función para abrir el modal con eventos del día
async function abrirModal(fecha) {
    console.log(fecha)
    const {events, nextEvents} = await getEventsByUser("user-1",fecha,fecha);

    eventModal(events);
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

setNewDate(monthNumber);

const createEventButton = document.getElementById("showModal");
createEventButton.addEventListener("click", () => showModal());

const showModal = () => {
    const body = document.body;

    const cerrarModal = () => {
        alert("cerrar")
        const modalContainer = document.getElementById('modalForm');
        if (modalContainer) {
            modalContainer.style.display = 'none';
        }
    };

    const aceptarModal = () => {
        alert('Formulario aceptado');
    };

    // Crea el HTML del modalContainer
    const modalContainerHTML = `
        <div id="modalForm" class="modal" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div class="modal-contenido" style="width: 50%; height: fit-content; background-color: gray; border-radius: 10px; padding: 20px; color: #fff;">
                <h1>Crear evento</h1>
                <form id="eventoForm" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                    ${crearInput('Nombre')}
                    ${crearInput('Día', false, true)}
                    ${crearInput('Hora de inicio', true)}
                    ${crearInput('Hora de finalización', true)}
                    ${crearInput('Ubicación')}
                    ${crearSelect('Prioridad', ['Alta', 'Media', 'Baja'])}
                    ${crearSelect('Categoría', ['Deportes', 'Educación', 'Trabajo', 'Ocio', 'Salud'])}
                    ${crearSelect('Categoría', ['Deportes', 'Educación', 'Trabajo', 'Ocio', 'Salud'])}
                    <textarea name="notas" placeholder="Notas..." rows="4"></textarea>
                    <div style="display: flex;">
                        ${crearBoton('Cerrar', cerrarModal, 'closeBtn')}
                        ${crearBoton('Crear Evento', aceptarModal)}
                    </div>
                </form>
            </div>
        </div>
    `;

    // Agrega el modal al cuerpo del documento usando innerHTML
    body.innerHTML += modalContainerHTML;
};



// Función para crear un input con un estilo básico y validación de formato HH:MM
function crearInput(labelText, esHora = false, esFecha = false) {
    
    const inputType = esHora ? 'time' : (esFecha ? 'date' : 'text');

    const inputHTML = `
        <div>
            <label style="display: block; margin-bottom: 5px;">${labelText}</label>
            <input type="${inputType}" ${esHora ? 'oninput="validarFormatoHora(this.value)"' : ''}>
        </div>
    `;

    return inputHTML;
}

// Función para validar el formato HH:MM
function validarFormatoHora(hora) {
    const formatoValido = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return formatoValido.test(hora);
}

// Función para crear un select con opciones y un estilo básico
function crearSelect(labelText, opciones) {
    const selectHTML = `
        <div>
            <label style="display: block; margin-bottom: 5px;">${labelText}</label>
            <select>
                ${opciones.map(opcion => `<option value="${opcion}">${opcion}</option>`).join('')}
            </select>
        </div>
    `;

    return selectHTML;
}

function crearBoton(texto, onClickCallback, claseExtra = '') {
    const boton = document.createElement('button');
    boton.className = `customBtn ${claseExtra}`;
    boton.textContent = texto;

    // Agrega el evento clic al botón
    boton.addEventListener('click', onClickCallback);

    // Debugging
    console.log(`Botón "${texto}" creado con evento clic.`);

    return boton.outerHTML;
}



function eventModal(eventosDelDia) {
    const body = document.body;

    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'miModal';
    modalContainer.className = 'modal';

    // Configurar el estilo del modalContainer
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

    eventosDelDia.forEach(event => {

        console.log(event)

        const listaDatosEvento = document.createElement('ul');

        // Iterar sobre las propiedades del evento y crear elementos li para cada una
        Object.entries(event).forEach(([key, value]) => {
            const itemDatoEvento = document.createElement('li');
            itemDatoEvento.textContent = `${key}: ${value}`;

            // Agregar clases CSS para los elementos li
            itemDatoEvento.classList.add('evento-info'); // Clase para el li
            itemDatoEvento.classList.add('evento-info-item'); // Clase para los elementos li dentro de la lista de datos

            listaDatosEvento.appendChild(itemDatoEvento);
        });

        // Agregar la lista de eventos al contenido del modal
        modalContent.appendChild(listaDatosEvento);
    });

    // Crear el botón "Cerrar" y agregar un manejador de eventos
    const cerrarModalBtn = document.createElement('button');
    cerrarModalBtn.textContent = 'Cerrar';
    cerrarModalBtn.className = 'closeBtn';
    cerrarModalBtn.addEventListener('click', function () {
        modalContainer.style.display = 'none';
    });

    // Agregar el botón "Cerrar" al contenido del modal
    modalContent.appendChild(cerrarModalBtn);

    // Agregar el contenido del modal al contenedor
    modalContainer.appendChild(modalContent);

    // Agregar el modal al cuerpo del documento
    body.appendChild(modalContainer);
}

async function getEventsByUser(id, fechaInicio, fechaFin) {
    const eventResponse = await fetch('http://localhost:3000/events');
    const data = await eventResponse.json();
    
    let events = [];
    let nextEvents = [];

    const today = new Date();
    const todayFormatted = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

    data.forEach(event => {

        // Convertir las fechas de los eventos al mismo formato que las fechas proporcionadas
        const eventDate = parseDate(event.date); // Convertir la fecha del evento al formato correcto
        const startRangeDate = parseDate(fechaInicio); // Convertir la fecha de inicio al formato correcto
        const endRangeDate = parseDate(fechaFin); // Convertir la fecha de fin al formato correcto

        function parseDate(dateString) {
            const [day, month, year] = dateString.split('/');
            return new Date(`${month}/${day}/${year}`);
        }

        // Verificar si la fecha del evento está dentro del rango especificado
        if (event.userId === id && eventDate >= startRangeDate && eventDate <= endRangeDate) {
            nextEvents.push(event);
        }

        // Verificar si el evento es de hoy        
        if (event.userId === id && event.date === fechaInicio) {
            events.push(event);
        }
    });

    return { events, nextEvents };
}


document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar los próximos eventos del usuario para una fecha específica
    async function loadNextEventsByUser(id, fechaInicio, fechaFin) {
        try {
            const { nextEvents } = await getEventsByUser(id, fechaInicio, fechaFin);
            const nextEventsDiv = document.getElementById('nextEvents');

            // Limpiar el contenido anterior
            nextEventsDiv.innerHTML = '';
            nextEventsDiv.style.display = 'flex';
            nextEventsDiv.style.flexDirection = 'column';
            nextEventsDiv.style.justifyContent = 'center';
            nextEventsDiv.style.alignItems = 'center';
            nextEventsDiv.style.textAlign = 'center';


            if (nextEvents.length > 0) {
                // Crear una lista de eventos
                const title = document.createElement('h3');
                title.textContent = "Próximos eventos";
                nextEventsDiv.appendChild(title);
                const eventsList = document.createElement('ul');
                nextEvents.forEach(event => {
                    const eventItem = document.createElement('li');
                    eventItem.textContent = event.name + " - " + event.date; // Suponiendo que cada evento tiene una propiedad "name"
                    eventsList.appendChild(eventItem);
                });
                nextEventsDiv.appendChild(eventsList);
            } else {
                // Si no hay eventos, mostrar un mensaje
                const noEventsMessage = document.createElement('p');
                noEventsMessage.textContent = 'No hay eventos próximos para esta semana.';
                nextEventsDiv.appendChild(noEventsMessage);
            }
        } catch (error) {
            console.error('Error al obtener los próximos eventos del usuario:', error);
        }
    }    

    // Función para mostrar u ocultar los próximos eventos dependiendo del tamaño de la pantalla
    function toggleNextEvents() {
        const nextEventsDiv = document.getElementById('nextEvents');
        if (window.innerWidth <= 768) {
            // Mostrar nextEvents y cargar los próximos eventos del usuario
            nextEventsDiv.style.display = 'block';
            const userId = "user-1";
            const fechaActual = new Date();
            const fechaProximaSemana = new Date(fechaActual.getTime() + 7 * 24 * 60 * 60 * 1000);
            const dayNextWeek = fechaProximaSemana.getDate();
            const monthNextWeek = fechaProximaSemana.getMonth() + 1;
            const yearNextWeek = fechaProximaSemana.getFullYear();
            const formattedNextWeekDate = `${dayNextWeek}/${monthNextWeek}/${yearNextWeek}`;
            loadNextEventsByUser(userId, getCurrentDate(), formattedNextWeekDate);
        } else {
            // Ocultar nextEvents si la pantalla es mayor que 768px
            nextEventsDiv.style.display = 'none';
        }
    }

    // Llamar a toggleNextEvents() cuando se cargue la página y cuando se redimensione la ventana
    toggleNextEvents();
    window.addEventListener('resize', toggleNextEvents);
});

