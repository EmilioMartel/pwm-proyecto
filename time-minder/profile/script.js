const iconoPanel = document.getElementById("icono-panel");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const menu = document.querySelector(".menu")

menu.addEventListener("click", ()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if (barraLateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display="none";
        menu.children[1].style.display="block";
    } else {
        menu.children[0].style.display="block";
        menu.children[1].style.display="none";
    }
    if (window.innerWidth<=320) {
        barraLateral.classList.add("barra-reducida");
        spans.forEach((span)=> {
            span.classList.add("oculto");
        })
    }
})

iconoPanel.addEventListener("click", ()=>{
    barraLateral.classList.toggle("barra-reducida");
    spans.forEach((span)=> {
        span.classList.toggle("oculto");
    })
})

