document.addEventListener('mousemove', (e) => {
  const header = document.querySelector('header');
  const headerRect = header.getBoundingClientRect(); // Obtiene la posición del header

  // Verifica si el cursor está fuera del header
  if (e.clientY < headerRect.top || e.clientY > headerRect.bottom) {
    createCursorTrail(e.clientX, e.clientY);
  }
});

function createCursorTrail(x, y) {
  const cursorTrail = document.createElement('div');
  cursorTrail.classList.add('cursor-effect');
  cursorTrail.style.left = x + 'px';
  cursorTrail.style.top = y + 'px';
  document.body.appendChild(cursorTrail);

  setTimeout(() => {
      cursorTrail.remove(); // Elimina el rastro después de que la animación termine
  }, 600); // La duración coincide con la animación (0.6s)
}

const textElement = document.getElementById('text');
const originalText = "こんにちはこんにちはここんにちはちちちはちちはちち"; // Texto original (18 caracteres)
const characters = originalText.split(''); // Divide en caracteres

let firstCharChanged = false; 
let secondCharChanged = false; 
let thirdCharChanged = false; 
let fourthCharChanged = false; 
let fifthCharChanged = false; 
let sixthCharChanged = false; 

const intervalId = setInterval(() => {
    const newText = characters.map((char, index) => {
        if (index === 0 && Date.now() >= startTime + 200) { // Cambiado a 1000 ms
            firstCharChanged = true; 
            return '<'; 
        }
        if (index === 1 && Date.now() >= startTime + 200) { // Cambiado a 1000 ms
            firstCharChanged = true; 
            return 'h'; 
        }
        if (index === 2 && Date.now() >= startTime + 200) { // Cambiado a 1000 ms
            firstCharChanged = true; 
            return '3'; 
        }
        if (index === 3 && Date.now() >= startTime + 200) { // Cambiado a 1000 ms
            firstCharChanged = true; 
            return '>'; 
        }
        if (index === 4 && Date.now() >= startTime + 200) { // Cambiado a 1000 ms
            firstCharChanged = true; 
            return 'S'; 
        }
        if (firstCharChanged && index === 5 && Date.now() >= startTime + 400) { // Cambiado a 1500 ms
            secondCharChanged = true; 
            return 'e'; 
        }
        if (secondCharChanged && index === 6 && Date.now() >= startTime + 400) { // Cambiado a 2000 ms
            thirdCharChanged = true; 
            return 'b'; 
        }
        if (thirdCharChanged && index === 7 && Date.now() >= startTime + 500) { // Cambiado a 2500 ms
            return 'a'; 
        }
        if (thirdCharChanged && index === 8 && Date.now() >= startTime + 600) { // Cambiado a 3000 ms
            return 's'; 
        }
        if (thirdCharChanged && index === 9 && Date.now() >= startTime + 700) { // Cambiado a 3500 ms
            sixthCharChanged = true; 
            return 't'; 
        }
        if (sixthCharChanged && index === 10 && Date.now() >= startTime + 800) { // Cambiado a 4000 ms
            return 'i'; 
        }
        if (sixthCharChanged && index === 11 && Date.now() >= startTime + 900) { // Cambiado a 4500 ms
            return 'a'; 
        }
        if (sixthCharChanged && index === 12 && Date.now() >= startTime + 1000) { // Cambiado a 5000 ms
            return 'n'; 
        }
        if (sixthCharChanged && index === 13 && Date.now() >= startTime + 1100) { // Cambiado a 5500 ms
            return ' '; 
        }
        if (sixthCharChanged && index === 14 && Date.now() >= startTime + 1200) { // Cambiado a 6000 ms
            return 'D'; 
        }
        if (sixthCharChanged && index === 15 && Date.now() >= startTime + 1300) { // Cambiado a 6500 ms
            return 'u'; 
        }
        if (sixthCharChanged && index === 16 && Date.now() >= startTime + 1400) { // Cambiado a 7000 ms
            return 'a'; 
        }
        if (sixthCharChanged && index === 17 && Date.now() >= startTime + 1500) { // Cambiado a 7500 ms
            return 'r'; 
        }
        if (sixthCharChanged && index === 18 && Date.now() >= startTime + 1600) { // Cambiado a 8000 ms
            return 't'; 
        }
        if (sixthCharChanged && index === 19 && Date.now() >= startTime + 1700) { // Cambiado a 8500 ms
            return 'e'; 
        }
        if (sixthCharChanged && index === 20 && Date.now() >= startTime + 1700) { // Cambiado a 8500 ms
            return '<'; 
        }
        if (sixthCharChanged && index === 21 && Date.now() >= startTime + 1700) { // Cambiado a 8500 ms
            return '/'; 
        }
        if (sixthCharChanged && index === 22 && Date.now() >= startTime + 1800) { // Cambiado a 8500 ms
            return 'h'; 
        }
        if (sixthCharChanged && index === 23 && Date.now() >= startTime + 1800) { // Cambiado a 8500 ms
            return '3'; 
        }
        if (sixthCharChanged && index === 24 && Date.now() >= startTime + 1800) { // Cambiado a 9000 ms
            return '>'; 
        }
        return Math.random() > 0.5 ? getRandomChar() : char;
    }).join('');

    textElement.textContent = newText;

    if (Date.now() >= startTime + 9500) { // Cambiado a 9500 ms
        clearInterval(intervalId);
    }
}, 100); // Cambia cada 100 ms (0.1 segundos)

const startTime = Date.now(); 

function getRandomChar() {
    const chars = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"];
    return chars[Math.floor(Math.random() * chars.length)];
}


// container2




  // Escuchar el evento de scroll del mouse
window.addEventListener('wheel', (event) => {
    const delta = event.deltaY; // Detecta si es hacia arriba o abajo
    const currentSection = document.querySelector('.active'); // Encuentra la sección activa
    let nextSection;
  
    if (delta > 0) {
      // Scroll hacia abajo
      nextSection = currentSection.nextElementSibling;
    } else {
      // Scroll hacia arriba
      nextSection = currentSection.previousElementSibling;
    }
  
    // Si existe una sección siguiente o anterior
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' }); // Desplazarse suavemente
        currentSection.classList.remove('active'); // Remover clase activa de la actual
        nextSection.classList.add('active'); // Agregar clase activa a la siguiente
    }
});
  
  // Inicializa la primera sección como activa
document.querySelector('#section1').classList.add('active');

document.querySelector('.container1').addEventListener('wheel', (event) => {
event.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.container1, .container2, .container3, .container4, .container5, .container6');
    let isScrolling = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSection = entry.target;

                if (!isScrolling) {
                    isScrolling = true;
                    currentSection.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                        isScrolling = false;
                    }, 800);  // Tiempo de espera hasta que el desplazamiento termine
                }
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});


// de los proyectos

const proyectos = [
    { id: 1, titulo: "Proyecto 1", descripcion: "Este proyecto se enfonco en el desarrollo de plantillas css y volviendolas responsivas una y cada una con un menu intuitivo que permite navegar una y cada uda de estas pequeñas landing pages. Este proyecto se llevo acabo con mi colega samuel Ospina", imagen: "public/img/landing-pages.png?height=400&width=600", link: "https://landingpagessamuel.netlify.app/", target: "_blank"},
    { id: 2, titulo: "Proyecto 2", descripcion: "En este proyecto se desarrolo un borrador para presentarle a un cliente de un catalogo de su propio restaurante para mostrar los servicios que ofrece, de manera web y movil siendo responsivo", imagen: "public/img/catalogo-burger.png", link: "https://trabajo-reserreccion.vercel.app/" },
    { id: 3, titulo: "Proyecto 3", descripcion: "Este proyecto utiliza las habilidades de HTML, CSS y JavaScript para crear un pequeño formulario para registrar un heroe y almacenarlo en una base de datos con una imagen de dicho heroe", imagen: "public/img/registro-heroes.png", link: "https://super-heros-five.vercel.app/" },
    { id: 4, titulo: "Proyecto 4", descripcion: "Para este proyecto se realizo una imitacion de la famosa app cuanto cuesta mi app, con la que se replico de la mejor manera utilizando web-componets para tener una mejor compilacion y desarrollo profesional.", imagen: "public/img/cuantocuestamiapp.png", link: "https://trabajo-js-chi.vercel.app/" },
    { id: 5, titulo: "Proyecto 5", descripcion: "Confecciones Pepita, el mejor sistema de desarrollo, intuitivo y amigable a la hora de llevar el control administrativo de tus confecciones en una base de datos que te calcula todo de manera automatizada, ordenada y eficiente", imagen: "public/img/confeccionespepita.png", link: "https://confecciones-pepita.vercel.app/" },
    { id: 6, titulo: "Proyecto 6", descripcion: "Cuando estamos en una empresa y quemeros llevar el control y tener roles y que cada uno de ellos tenga tareas especificas, le presentro mi proyecto full stack en el cual vinculamos Html, Css, JavaScript, MySQL, Java y Springboot y frameworks como nodeJs y arquitectura como la Hexagonal Para llevar a cabo una interfaz para administrativos y distintos roles que quieran agregrar para llevar el control empresarial y el orden en una empresa de entrada, salida y utilidad de productos en cualquier region, sucursal, etc...", imagen: "public/img/prestService.png", link: "https://example.com/proyecto6" }
];

let currentIndex = 0;
let intervalIdd;

const sliderContent = document.getElementById('sliderContent');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const sliderDots = document.getElementById('sliderDots');
const sliderContainer = document.getElementById('sliderContainer');
const prevPreview = document.getElementById('prevPreview');
const nextPreview = document.getElementById('nextPreview');

function createSlides() {
    proyectos.forEach((proyecto, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (index === 0) slide.classList.add('active');
        slide.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            <div class="slide-info">
                <h3 class="slide-title">${proyecto.titulo}</h3>
                <p class="slide-description">${proyecto.descripcion}</p>
            </div>
        `;
        
        // Redirigir cuando se haga clic en el slide
        slide.addEventListener('click', () => {
            window.location.href = proyecto.link;
        });
        
        sliderContent.appendChild(slide);

        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
}


function updateSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Desvanecer el slide activo
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            slide.classList.add('fade-out');
        }
    });

    // Esperar hasta que la animación de desvanecimiento se complete
    setTimeout(() => {
        slides.forEach((slide, index) => {
            // Quitar todas las clases activas y de transición
            slide.classList.remove('active', 'fade-out', 'fade-in');
            dots[index].classList.remove('active');
            
            // Activar solo el slide actual
            if (index === currentIndex) {
                slide.classList.add('active', 'fade-in');
                dots[index].classList.add('active');
            }
        });
    }, 500); // La duración debe coincidir con la duración de la animación de `fade-out`

    updatePreviews();
}


function updatePreviews() {
    const prevIndex = (currentIndex - 1 + proyectos.length) % proyectos.length;
    // const nextIndex = (currentIndex + 2) % proyectos.length;

    prevPreview.querySelector('img').src = proyectos[prevIndex].imagen;
    prevPreview.querySelector('h4').textContent = proyectos[prevIndex].titulo;

    nextPreview.querySelector('img').src = proyectos[nextIndex].imagen;
    nextPreview.querySelector('h4').textContent = proyectos[nextIndex].titulo;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % proyectos.length;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + proyectos.length) % proyectos.length;
    updateSlide();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlide();
}

function startAutoSlide() {
    intervalIdd = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(intervalIdd);
}

prevButton.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

sliderContainer.addEventListener('mouseenter', stopAutoSlide);
sliderContainer.addEventListener('mouseleave', startAutoSlide);

prevPreview.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

nextPreview.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

createSlides();
updateSlide();
startAutoSlide();