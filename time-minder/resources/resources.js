document.addEventListener("DOMContentLoaded", function() {
    // Hacer la solicitud a http://localhost:3000/resources
    fetch('http://localhost:3000/resources')
        .then(response => response.json())
        .then(data => {
            // Llamar a una función para agregar los recursos a la sección
            addResourcesToSection(data);

            setupToggleAside();
        })
        .catch(error => console.error('Error al obtener los recursos:', error));

    

    // Aquí puedes agregar más lógica o funciones según sea necesario
});

function setupToggleAside() {
    var toggleAsideBtn = document.getElementById('toggleAsideBtn');
    var sidebar = document.getElementById('sidebar');

    toggleAsideBtn.addEventListener('click', function() {
        sidebar.classList.toggle('mobile');
        if (window.innerWidth <= 768) {
            if (sidebar.style.display === 'none' || sidebar.style.display === '') {
                sidebar.style.display = 'flex';
                sidebar.style.flexDirection = 'column';
                sidebar.style.justifyContent = 'center';
                sidebar.style.alignItems = 'center';
            } else {
                sidebar.style.display = 'none';
            }
        }
    });
}

// Función para agregar recursos a la sección
function addResourcesToSection(resources) {
    var contenidoDiv = document.getElementById('contenido');

    // Limpiar contenido existente
    contenidoDiv.innerHTML = '';

    // Iterar sobre los recursos y agregarlos al contenido
    resources.forEach(resource => {
        var fileDiv = document.createElement('div');
        fileDiv.className = 'files';
        var span = document.createElement('span');
        span.textContent = resource.name; // Asumiendo que cada recurso tiene una propiedad "name"
        fileDiv.appendChild(span);
        contenidoDiv.appendChild(fileDiv);
    });
}
