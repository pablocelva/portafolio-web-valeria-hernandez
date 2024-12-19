
//Menu desplegable
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('#nav-menu');
const navMenuToggle = document.querySelector('#menu-icon-toggle');

function menuToggle() {
    navMenu.classList.toggle('show');
}

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
    //if (!e.target.matches('.menu-icon')) {
        navMenu.classList.remove('show');
    }
});

document.addEventListener('scroll', () => {
    navMenu.classList.remove('show');
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

const logo = document.querySelector('.logo');
//let scrollTimeout;

document.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        // Si está en la parte superior, muestra el logo
        logo.classList.remove('hidden');
    } else {
        // Si hace scroll, oculta el logo
        logo.classList.add('hidden');
    }
    /*
    // Oculta el logo al hacer scroll
    logo.classList.add('hidden');

    // Limpia cualquier temporizador previo
    clearTimeout(scrollTimeout);

    // Programa la reaparición del logo después de 2 segundos
    scrollTimeout = setTimeout(() => {
        logo.classList.remove('hidden');
    }, 100);*/
});

let menuIconScrollTimeout;

document.addEventListener('scroll', () => {
    // Oculta el menú al hacer scroll
    menuIcon.classList.add('hidden');

    // Limpia cualquier temporizador previo
    clearTimeout(menuIconScrollTimeout);

    // Programa la reaparición del menú después de 2 segundos
    menuIconScrollTimeout = setTimeout(() => {
        menuIcon.classList.remove('hidden');
    }, 100);
});