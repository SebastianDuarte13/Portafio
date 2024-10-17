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