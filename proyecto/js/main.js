document.addEventListener('DOMContentLoaded', () => {
    const snake = document.createElement('div');
    snake.classList.add('snake');
    document.body.appendChild(snake);

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        changeColor(e.clientX, e.clientY);
    });

    function animateSnake() {
        snake.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        requestAnimationFrame(animateSnake);
    }

    animateSnake();
});

function changeColor(x, y) {
    const r = Math.round((x / window.innerWidth) * 255);
    const g = Math.round((y / window.innerHeight) * 255);
    const b = 150;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Función para alternar el menú en dispositivos móviles
function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Función para abrir el modal correspondiente
function openModal(projectId) {
    const modal = document.getElementById('modal-' + projectId);
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal(projectId) {
    const modal = document.getElementById('modal-' + projectId);
    modal.style.display = 'none';
}

// Cerrar el modal cuando se presiona la tecla 'Escape'
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});
