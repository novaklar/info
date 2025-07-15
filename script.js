// Variables globales
let currentSlide = 0;
let selectedRole = null;
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-btn');
const onboardingContainer = document.getElementById('onboardingContainer');
const modalOverlay = document.getElementById('modalOverlay');
const modalContinueBtn = document.getElementById('modalContinueBtn');
const trainingVideoContainer = document.getElementById('trainingVideoContainer');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  setupEventListeners();
  updateNavButtons();
  goToSlide(0, false);
});

// Configurar event listeners
function setupEventListeners() {
  // Touch events para navegación en móviles
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0;
  let touchEndY = 0;
  let isScrolling = false;
  
  onboardingContainer.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isScrolling = false;
  }, { passive: true });
  
  onboardingContainer.addEventListener('touchmove', function(e) {
    if (!isScrolling) {
      const xDiff = Math.abs(e.touches[0].clientX - touchStartX);
      const yDiff = Math.abs(e.touches[0].clientY - touchStartY);
      
      // Determinar si el usuario está haciendo scroll vertical u horizontal
      if (yDiff > xDiff) {
        isScrolling = true;
      }
    }
  }, { passive: true });
  
  onboardingContainer.addEventListener('touchend', function(e) {
    if (!isScrolling) {
      touchEndX = e.changedTouches[0].clientX;
      touchEndY = e.changedTouches[0].clientY;
      handleSwipe();
    }
    isScrolling = false;
  }, { passive: true });
  
  // Detectar scroll manual
  onboardingContainer.addEventListener('scroll', debounce(function() {
    const newSlide = Math.round(this.scrollLeft / window.innerWidth);
    if (newSlide !== currentSlide) {
      currentSlide = newSlide;
      updateNavButtons();
    }
  }, 100), { passive: true });
  
  // Cerrar modal
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  
  // Teclado
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });
}

// Debounce para mejorar rendimiento
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}

// Manejar gesto de deslizamiento
function handleSwipe() {
  const threshold = 50;
  const deltaX = touchStartX - touchEndX;
  
  if (deltaX > threshold) {
    nextSlide();
  } else if (deltaX < -threshold) {
    prevSlide();
  }
}

// Navegación entre slides
function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    goToSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    goToSlide(currentSlide);
  }
}

function goToSlide(index, smooth = true) {
  if (index >= 0 && index < slides.length) {
    currentSlide = index;
    onboardingContainer.scrollTo({
      left: index * window.innerWidth,
      behavior: smooth ? 'smooth' : 'auto'
    });
    updateNavButtons();
  }
}

// Actualizar botones de navegación
function updateNavButtons() {
  navButtons.forEach((btn, index) => {
    btn.classList.toggle('active', index === currentSlide);
  });
}

// Modal functions
function openModal() {
  document.getElementById('confirmInfo').checked = false;
  document.getElementById('confirmRole').checked = false;
  modalContinueBtn.disabled = true;
  
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function checkConditions() {
  const confirmInfo = document.getElementById('confirmInfo').checked;
  const confirmRole = document.getElementById('confirmRole').checked;
  
  modalContinueBtn.disabled = !(confirmInfo && confirmRole);
}

function continueToTraining() {
  const confirmInfo = document.getElementById('confirmInfo').checked;
  const confirmRole = document.getElementById('confirmRole').checked;
  
  if (!confirmInfo || !confirmRole) {
    alert('Debes aceptar todas las condiciones para continuar.');
    return;
  }
  
  loadTrainingVideo();
  closeModal();
  goToSlide(8);
}

function loadTrainingVideo() {
  trainingVideoContainer.innerHTML = `
    <iframe src="https://www.youtube.com/embed/7xWRpFFRzgg" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
  `;
}

// Manejar cambios de orientación
window.addEventListener('orientationchange', function() {
  setTimeout(() => {
    goToSlide(currentSlide, false);
  }, 300);
});

// Manejar cambios de tamaño de ventana
window.addEventListener('resize', debounce(function() {
  goToSlide(currentSlide, false);
}, 300));
