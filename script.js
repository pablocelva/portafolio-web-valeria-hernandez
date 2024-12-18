
//Menu desplegable
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('#nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    //if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
    if (!e.target.matches('.menu-icon')) {
        navMenu.classList.remove('show');
    }
});

//Animacion de texto
const typingText = document.querySelector('.typing-text');
const roles = ['Desarollador Web', 'Diseñador UX/UI', 'Desarrollador Full-stack', 'Desarrollador de Juegos', 'Compositor Musical'];
let index = 0;

function changeText() {
    typingText.textContent = roles[index];
    index = (index + 1) % roles.length;
}

//setInterval(changeText, 1000);

//Funcion para copiar correo
function copiarCorreo() {
    const correo = "pablomartin.lambert@gmail.com"
    navigator.clipboard.writeText(correo)
    .then(() => {
        alert("✨📧 ¡Correo copiado al portapapeles! 🌿✨")
        })
    .catch((err) => {
        console.error('Error copiando el correo: ', err);
    });
}