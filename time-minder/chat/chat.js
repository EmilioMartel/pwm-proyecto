// Función para agregar elementos de chat al área de chat
function addChatMessages(chatData) {
    // Limpiar el área de chat
    document.getElementById('chat-zone').innerHTML = '';
    
    chatData.forEach(chat => {
        // Crear encabezado con el nombre del chat
        var header = document.createElement('header');
        var img = document.createElement('img');
        img.src = '../../assets/images/imagen-usuario.png';
        img.alt = 'Imagen de usuario';
        header.appendChild(img);
        var h4 = document.createElement('h4');
        h4.innerText = chat.id;
        header.appendChild(h4);
        document.getElementById('chat-zone').appendChild(header);


        // Contenido del chat
        chat.data.forEach(message => {
            // Determinar la clase del div
            var divClassName = (message.owner === 'user-1') ? 'bubble-right' : 'bubble-left';
            // Determinar la clase del li
            var liClassName = (message.owner === 'user-1') ? 'my-chat' : 'other-chat';
            // Crear elemento div para el mensaje
            var messageDiv = document.createElement('div');
            messageDiv.className = divClassName;
            // Crear elemento li para el mensaje
            var messageLi = document.createElement('li');
            messageLi.className = liClassName;
            messageLi.innerText = message.message;
            // Agregar li al div
            messageDiv.appendChild(messageLi);
            // Agregar div al chat zone
            document.getElementById('chat-zone').appendChild(messageDiv);
        });
    });
}

function openModal() {
    // Obtener el modal
    var modal = document.getElementById("myModal");

    // Obtener el botón para cerrar el modal
    var cancelBtn = document.getElementById("cancelBtn");

    // Mostrar el modal
    modal.style.display = "block";

    // Cuando se haga clic en <span> (x), cerrar el modal
    cancelBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario haga clic en cualquier lugar fuera del modal, cerrarlo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function setupToggleAside() {
    var toggleAsideBtn = document.getElementById('toggleAsideBtn');
    var sidebar = document.getElementById('sidebar');

    toggleAsideBtn.addEventListener('click', function() {
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    });
}

var btn = document.querySelector(".btnCreateGroup");
btn.onclick = openModal;


// Función para agregar elementos de lista de chat al área de lista de chat
function addChatListItems(chatList) {
    var ul = document.getElementById('chat-list');
    ul.innerHTML = ''; // Limpiar la lista de chat
    
    chatList.forEach(function(chat, index) {
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.src = '../../assets/images/imagen-usuario.png';
        img.alt = 'Imagen de usuario';
        li.appendChild(img);
        li.appendChild(document.createTextNode(chat.id));
        // Adjuntar un controlador de eventos al elemento de lista de chat
        li.addEventListener('click', function() {
            // Llamar a la función para cargar los mensajes del chat seleccionado
            addChatMessages([chat]);
        });
        ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/chats')
        .then(response => response.json())
        .then(data => {
            // Llamar a la función para agregar los elementos de lista de chat al área de lista de chat
            addChatListItems(data);
            
            // Llamar a la función para configurar el botón de alternar el aside
            setupToggleAside();

        })
        .catch(error => console.error('Error al obtener los mensajes del chat:', error));
});