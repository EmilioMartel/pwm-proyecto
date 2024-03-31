const iconoPanel = document.getElementById("icono-panel");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");

const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");


iconoPanel.addEventListener("click", ()=>{
    barraLateral.classList.toggle("barra-reducida");
    spans.forEach((span)=> {
        span.classList.toggle("oculto");
    })
})

async function getInfoUser(id) {
    const eventResponse = await fetch('http://localhost:3000/users');
    const data = await eventResponse.json();
    

    data.forEach(user => {
       if(user.id === id){
        nameInput.value = user.name;
        lastNameInput.value = user.lastName;
        emailInput.value = user.email;
       }
    });

    
}

getInfoUser("user-1")