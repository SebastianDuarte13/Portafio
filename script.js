const proyectos = [
    { id: 1, titulo: "Proyecto 1", descripcion: "Descripción detallada del proyecto 1. Este proyecto se enfocó en...", imagen: "public/img/yo.png?height=400&width=600" },
    { id: 2, titulo: "Proyecto 2", descripcion: "Descripción detallada del proyecto 2. En este caso, desarrollamos...", imagen: "/placeholder.svg?height=400&width=600" },
    { id: 3, titulo: "Proyecto 3", descripcion: "El proyecto 3 fue un desafío interesante porque...", imagen: "/placeholder.svg?height=400&width=600" },
    { id: 4, titulo: "Proyecto 4", descripcion: "Para el proyecto 4, utilizamos tecnologías innovadoras como...", imagen: "/placeholder.svg?height=400&width=600" },
    { id: 5, titulo: "Proyecto 5", descripcion: "El proyecto 5 se centró en mejorar la experiencia del usuario mediante...", imagen: "/placeholder.svg?height=400&width=600" },
    { id: 5, titulo: "Proyecto 6", descripcion: "El proyecto 5 se centró en mejorar la experiencia del usuario mediante...", imagen: "/placeholder.svg?height=400&width=600" },
];

let currentIndex = 0;
let intervalId;

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
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('active');
            dots[index].classList.add('active');
        } else {
            slide.classList.remove('active');
            dots[index].classList.remove('active');
        }
    });
    updatePreviews();
}

function updatePreviews() {
    const prevIndex = (currentIndex - 1 + proyectos.length) % proyectos.length;
    const nextIndex = (currentIndex + 1) % proyectos.length;

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
    intervalId = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
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