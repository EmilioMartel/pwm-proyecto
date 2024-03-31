const iconoPanel = document.getElementById("icono-panel");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");

iconoPanel.addEventListener("click", ()=>{
    barraLateral.classList.toggle("barra-reducida");
    spans.forEach((span)=> {
        span.classList.toggle("oculto");
    })
})

