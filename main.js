document.addEventListener('mousemove', (e) => {
    const header = document.querySelector('header');
    const headerRect = header.getBoundingClientRect(); // Obtiene la posición del header

    // Verifica si el cursor está fuera del header
    if (e.clientY < headerRect.top || e.clientY > headerRect.bottom) {
        createCursorTrail(e.clientX, e.clientY);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('show');
        menuIcon.setAttribute('aria-expanded', menu.classList.contains('show'));
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove('show');
            menuIcon.setAttribute('aria-expanded', 'false');
        }
    });

    // Ajustar el menú en caso de cambio de tamaño de pantalla
    window.addEventListener('resize', () => {
        if (window.innerWidth > 780) {
            menu.classList.remove('show');
            menuIcon.setAttribute('aria-expanded', 'false');
        }
    });
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
    { id: 1, titulo: "Proyecto 1", descripcion: "Este proyecto se enfonco en el desarrollo de plantillas css y volviendolas responsivas una y cada una con un menu intuitivo que permite navegar una y cada uda de estas pequeñas landing pages. Este proyecto se llevo acabo con mi colega samuel Ospina", imagen: "public\img\landing-pages.png?height=400&width=600", link: "https://landingpagessamuel.netlify.app/", target: "_blank" },
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


// form
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('contactForm');
//     const submitBtn = document.getElementById('submitBtn');
//     const respuestaDiv = document.getElementById('respuesta');

//     form.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Deshabilitar el botón y cambiar el texto
//         submitBtn.disabled = true;
//         submitBtn.textContent = 'Enviando...';
        
//         // Limpiar mensaje de respuesta anterior
//         respuestaDiv.textContent = '';
//         respuestaDiv.className = 'respuesta';

//         // Obtener los datos del formulario
//         const formData = new FormData(form);
//         const data = {
//             nombre: formData.get('nombre'),
//             email: formData.get('email'),
//             mensaje: formData.get('mensaje')
//         };

//         // Enviar los datos a la API
//         fetch('https://665a2b49003609eda45d40be.mockapi.io/contacto', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Error en la respuesta del servidor');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Mostrar mensaje de éxito
//             respuestaDiv.textContent = '¡Gracias por contactarnos! Te responderemos pronto.';
//             respuestaDiv.classList.add('exito');
//             form.reset(); // Limpiar el formulario
//         })
//         .catch(error => {
//             // Mostrar mensaje de error
//             respuestaDiv.textContent = 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.';
//             respuestaDiv.classList.add('error');
//         })
//         .finally(() => {
//             // Reactivar el botón y restaurar el texto
//             submitBtn.disabled = false;
//             submitBtn.textContent = 'Enviar';
//         });
//     });
// });


// particulas del inicio

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) { var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; e = e.replace(a, function (e, a, t, i) { return a + a + t + t + i + i }); var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e); return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null } function clamp(e, a, t) { return Math.min(Math.max(e, a), t) } function isInArray(e, a) { return a.indexOf(e) > -1 } var pJS = function (e, a) { var t = document.querySelector("#" + e + " > .particles-js-canvas-el"); this.pJS = { canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight }, particles: { number: { value: 400, density: { enable: !0, value_area: 800 } }, color: { value: "#fff" }, shape: { type: "circle", stroke: { width: 0, color: "#ff0000" }, polygon: { nb_sides: 5 }, image: { src: "", width: 100, height: 100 } }, opacity: { value: 1, random: !1, anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 } }, size: { value: 20, random: !1, anim: { enable: !1, speed: 20, size_min: 0, sync: !1 } }, line_linked: { enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1 }, move: { enable: !0, speed: 2, direction: "none", random: !1, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 } }, array: [] }, interactivity: { detect_on: "canvas", events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 100, line_linked: { opacity: 1 } }, bubble: { distance: 200, size: 80, duration: .4 }, repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }, mouse: {} }, retina_detect: !1, fn: { interact: {}, modes: {}, vendors: {} }, tmp: {} }; var i = this.pJS; a && Object.deepExtend(i, a), i.tmp.obj = { size_value: i.particles.size.value, size_anim_speed: i.particles.size.anim.speed, move_speed: i.particles.move.speed, line_linked_distance: i.particles.line_linked.distance, line_linked_width: i.particles.line_linked.width, mode_grab_distance: i.interactivity.modes.grab.distance, mode_bubble_distance: i.interactivity.modes.bubble.distance, mode_bubble_size: i.interactivity.modes.bubble.size, mode_repulse_distance: i.interactivity.modes.repulse.distance }, i.fn.retinaInit = function () { i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio }, i.fn.canvasInit = function () { i.canvas.ctx = i.canvas.el.getContext("2d") }, i.fn.canvasSize = function () { i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () { i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles() }) }, i.fn.canvasPaint = function () { i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h) }, i.fn.canvasClear = function () { i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h) }, i.fn.particle = function (e, a, t) { if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value) if (e.value instanceof Array) { var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)]; this.color.rgb = hexToRgb(s) } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l }); else "random" == e.value ? this.color.rgb = { r: Math.floor(256 * Math.random()) + 0, g: Math.floor(256 * Math.random()) + 0, b: Math.floor(256 * Math.random()) + 0 } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value)); this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random())); var n = {}; switch (i.particles.move.direction) { case "top": n = { x: 0, y: -1 }; break; case "top-right": n = { x: .5, y: -.5 }; break; case "right": n = { x: 1, y: -0 }; break; case "bottom-right": n = { x: .5, y: .5 }; break; case "bottom": n = { x: 0, y: 1 }; break; case "bottom-left": n = { x: -.5, y: 1 }; break; case "left": n = { x: -1, y: 0 }; break; case "top-left": n = { x: -.5, y: -.5 }; break; default: n = { x: 0, y: 0 } }i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy; var r = i.particles.shape.type; if ("object" == typeof r) { if (r instanceof Array) { var c = r[Math.floor(Math.random() * r.length)]; this.shape = c } } else this.shape = r; if ("image" == this.shape) { var o = i.particles.shape; this.img = { src: o.image.src, ratio: o.image.width / o.image.height }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1)) } }, i.fn.particle.prototype.draw = function () { function e() { i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio) } var a = this; if (void 0 != a.radius_bubble) var t = a.radius_bubble; else var t = a.radius; if (void 0 != a.opacity_bubble) var s = a.opacity_bubble; else var s = a.opacity; if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")"; else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")"; switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) { case "circle": i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1); break; case "edge": i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t); break; case "triangle": i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2); break; case "polygon": i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1); break; case "star": i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2); break; case "image": if ("svg" == i.tmp.img_type) var r = a.img.obj; else var r = i.tmp.img_obj; r && e() }i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill() }, i.fn.particlesCreate = function () { for (var e = 0; e < i.particles.number.value; e++)i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value)) }, i.fn.particlesUpdate = function () { for (var e = 0; e < i.particles.array.length; e++) { var a = i.particles.array[e]; if (i.particles.move.enable) { var t = i.particles.move.speed / 2; a.x += a.vx * t, a.y += a.vy * t } if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = { x_left: a.radius, x_right: i.canvas.w, y_top: a.radius, y_bottom: i.canvas.h }; else var s = { x_left: -a.radius, x_right: i.canvas.w + a.radius, y_top: -a.radius, y_bottom: i.canvas.h + a.radius }; switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) { case "bounce": a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy) }if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var n = e + 1; n < i.particles.array.length; n++) { var r = i.particles.array[n]; i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r) } } }, i.fn.particlesDraw = function () { i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate(); for (var e = 0; e < i.particles.array.length; e++) { var a = i.particles.array[e]; a.draw() } }, i.fn.particlesEmpty = function () { i.particles.array = [] }, i.fn.particlesRefresh = function () { cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start() }, i.fn.interact.linkParticles = function (e, a) { var t = e.x - a.x, s = e.y - a.y, n = Math.sqrt(t * t + s * s); if (n <= i.particles.line_linked.distance) { var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance; if (r > 0) { var c = i.particles.line_linked.color_rgb_line; i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath() } } }, i.fn.interact.attractParticles = function (e, a) { var t = e.x - a.x, s = e.y - a.y, n = Math.sqrt(t * t + s * s); if (n <= i.particles.line_linked.distance) { var r = t / (1e3 * i.particles.move.attract.rotateX), c = s / (1e3 * i.particles.move.attract.rotateY); e.vx -= r, e.vy -= c, a.vx += r, a.vy += c } }, i.fn.interact.bounceParticles = function (e, a) { var t = e.x - a.x, i = e.y - a.y, s = Math.sqrt(t * t + i * i), n = e.radius + a.radius; n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy) }, i.fn.modes.pushParticles = function (e, a) { i.tmp.pushing = !0; for (var t = 0; e > t; t++)i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, { x: a ? a.pos_x : Math.random() * i.canvas.w, y: a ? a.pos_y : Math.random() * i.canvas.h })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1) }, i.fn.modes.removeParticles = function (e) { i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw() }, i.fn.modes.bubbleParticle = function (e) { function a() { e.opacity_bubble = e.opacity, e.radius_bubble = e.radius } function t(a, t, s, n, c) { if (a != t) if (i.tmp.bubble_duration_end) { if (void 0 != s) { var o = n - p * (n - a) / i.interactivity.modes.bubble.duration, l = a - o; d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d) } } else if (r <= i.interactivity.modes.bubble.distance) { if (void 0 != s) var v = s; else var v = n; if (v != a) { var d = n - p * (n - a) / i.interactivity.modes.bubble.duration; "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d) } } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0) } if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) { var s = e.x - i.interactivity.mouse.pos_x, n = e.y - i.interactivity.mouse.pos_y, r = Math.sqrt(s * s + n * n), c = 1 - r / i.interactivity.modes.bubble.distance; if (r <= i.interactivity.modes.bubble.distance) { if (c >= 0 && "mousemove" == i.interactivity.status) { if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) { var o = e.radius + i.interactivity.modes.bubble.size * c; o >= 0 && (e.radius_bubble = o) } else { var l = e.radius - i.interactivity.modes.bubble.size, o = e.radius - l * c; o > 0 ? e.radius_bubble = o : e.radius_bubble = 0 } if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) { var v = i.interactivity.modes.bubble.opacity * c; v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v) } else { var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c; v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v) } } } else a(); "mouseleave" == i.interactivity.status && a() } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) { if (i.tmp.bubble_clicking) { var s = e.x - i.interactivity.mouse.click_pos_x, n = e.y - i.interactivity.mouse.click_pos_y, r = Math.sqrt(s * s + n * n), p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3; p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1) } i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity")) } }, i.fn.modes.repulseParticle = function (e) { function a() { var a = Math.atan2(d, p); if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) { var t = { x: e.x + e.vx, y: e.y + e.vy }; t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy) } } if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) { var t = e.x - i.interactivity.mouse.pos_x, s = e.y - i.interactivity.mouse.pos_y, n = Math.sqrt(t * t + s * s), r = { x: t / n, y: s / n }, c = i.interactivity.modes.repulse.distance, o = 100, l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50), v = { x: e.x + r.x * l, y: e.y + r.y * l }; "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y) } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) { var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3), p = i.interactivity.mouse.click_pos_x - e.x, d = i.interactivity.mouse.click_pos_y - e.y, m = p * p + d * d, u = -c / m * 1; c >= m && a() } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i) }, i.fn.modes.grabParticle = function (e) { if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) { var a = e.x - i.interactivity.mouse.pos_x, t = e.y - i.interactivity.mouse.pos_y, s = Math.sqrt(a * a + t * t); if (s <= i.interactivity.modes.grab.distance) { var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance; if (n > 0) { var r = i.particles.line_linked.color_rgb_line; i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath() } } } }, i.fn.vendors.eventsListeners = function () { "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) { if (i.interactivity.el == window) var a = e.clientX, t = e.clientY; else var a = e.offsetX || e.clientX, t = e.offsetY || e.clientY; i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove" }), i.interactivity.el.addEventListener("mouseleave", function (e) { i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave" })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () { if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) { case "push": i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb); break; case "remove": i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb); break; case "bubble": i.tmp.bubble_clicking = !0; break; case "repulse": i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () { i.tmp.repulse_clicking = !1 }, 1e3 * i.interactivity.modes.repulse.duration) } }) }, i.fn.vendors.densityAutoParticles = function () { if (i.particles.number.density.enable) { var e = i.canvas.el.width * i.canvas.el.height / 1e3; i.tmp.retina && (e /= 2 * i.canvas.pxratio); var a = e * i.particles.number.value / i.particles.number.density.value_area, t = i.particles.array.length - a; 0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t) } }, i.fn.vendors.checkOverlap = function (e, a) { for (var t = 0; t < i.particles.array.length; t++) { var s = i.particles.array[t], n = e.x - s.x, r = e.y - s.y, c = Math.sqrt(n * n + r * r); c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e)) } }, i.fn.vendors.createSvgImg = function (e) { var a = i.tmp.source_svg, t = /#([0-9A-F]{3,6})/gi, s = a.replace(t, function (a, t, i, s) { if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")"; else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")"; return n }), n = new Blob([s], { type: "image/svg+xml;charset=utf-8" }), r = window.URL || window.webkitURL || window, c = r.createObjectURL(n), o = new Image; o.addEventListener("load", function () { e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++ }), o.src = c }, i.fn.vendors.destroypJS = function () { cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) { var r = s * n, c = s / n, o = 180 * (c - 2) / c, l = Math.PI - Math.PI * o / 180; e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0); for (var v = 0; r > v; v++)e.lineTo(i, 0), e.translate(i, 0), e.rotate(l); e.fill(), e.restore() }, i.fn.vendors.exportImg = function () { window.open(i.canvas.el.toDataURL("image/png"), "_blank") }, i.fn.vendors.loadImg = function (e) { if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) if ("svg" == e) { var a = new XMLHttpRequest; a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) { 4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0)) }, a.send() } else { var t = new Image; t.addEventListener("load", function () { i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw() }), t.src = i.particles.shape.image.src } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0 }, i.fn.vendors.draw = function () { "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) }, i.fn.vendors.checkBeforeDraw = function () { "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw()) }, i.fn.vendors.init = function () { i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color) }, i.fn.vendors.start = function () { isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw() }, i.fn.vendors.eventsListeners(), i.fn.vendors.start() }; Object.deepExtend = function (e, a) { for (var t in a) a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t]; return e }, window.requestAnimFrame = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) { window.setTimeout(e, 1e3 / 60) } }(), window.cancelRequestAnimFrame = function () { return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout }(), window.pJSDom = [], window.particlesJS = function (e, a) { "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js"); var t = document.getElementById(e), i = "particles-js-canvas-el", s = t.getElementsByClassName(i); if (s.length) for (; s.length > 0;)t.removeChild(s[0]); var n = document.createElement("canvas"); n.className = i, n.style.width = "100%", n.style.height = "100%"; var r = document.getElementById(e).appendChild(n); null != r && pJSDom.push(new pJS(e, a)) }, window.particlesJS.load = function (e, a, t) { var i = new XMLHttpRequest; i.open("GET", a), i.onreadystatechange = function (a) { if (4 == i.readyState) if (200 == i.status) { var s = JSON.parse(a.currentTarget.response); window.particlesJS(e, s), t && t() } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found") }, i.send() };