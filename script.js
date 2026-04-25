
window.onload = () => {
    alert("¡Bienvenido a mi portafolio!");
};

const botonCambiar = document.querySelector('#mi-boton');
const parrafoInfo = document.querySelector('#parrafo-descripcion');


if(botonCambiar && parrafoInfo) {
    botonCambiar.addEventListener('click', () => {
      
        parrafoInfo.textContent = "¡Gracias por interesarte en mi trabajo! He recibido tu mensaje.";
      
        parrafoInfo.style.color = "#3b82f6"; 
        parrafoInfo.style.fontWeight = "bold";
    });
}


const pestañas = document.querySelectorAll('.pestaña-proyecto');

pestañas.forEach(pestaña => {
    pestaña.addEventListener('click', () => {
      
        const activa = document.querySelector('.pestaña-proyecto.activa');
        if (activa && activa !== pestaña) {
            activa.classList.remove('activa');
        }
        
      
        pestaña.classList.toggle('activa');
    });
});

function toggleContenido() {
    const extraInfo = document.getElementById('info-extra');
    if (extraInfo) {
        if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
            extraInfo.style.display = "block";
        } else {
            extraInfo.style.display = "none";
        }
    }
}