<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Onboarding Afiliados | Novaklar</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="onboarding-container" id="onboardingContainer">
    <!-- Slide 1: Bienvenida -->
    <div class="slide">
      <div class="slide-content">
        <div class="logo-container">
          <img src="https://raw.githubusercontent.com/novaklar/web/refs/heads/main/Novaklar.svg" alt="Novaklar Logo" class="logo">
        </div>
        <h1 class="slide-title">¡Bienvenido a Novaklar!</h1>
        <p class="slide-description">
          La plataforma que transforma la forma de generar ingresos en línea
        </p>
        <button class="btn" onclick="nextSlide()">
          Comenzar <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Slide 2: Información Novaklar -->
    <div class="slide">
      <div class="slide-content">
        <h1 class="slide-title">¿Qué es Novaklar?</h1>
        <div class="scrollable-content">
          <p class="justified">Novaklar es una empresa digital que transforma la forma de generar ingresos en línea. Desde 2023, hemos creado una comunidad que conecta a personas con oportunidades reales y accesibles, ofreciendo productos digitales como streaming, recargas, suscripciones y mucho más.</p>
          
          <p class="justified">Nuestro modelo de trabajo es flexible, inclusivo y pensado especialmente para jóvenes, estudiantes y universitarios que buscan un ingreso pasivo. Puedes ser revendedor, promotor o reclutador, sin necesidad de inversión previa. En novaklar, creces a tu ritmo y con el respaldo de un equipo comprometido.</p>
          
          <p class="justified">Es el complemento perfecto para personas con trabajos estables que buscan aumentar sus ingresos. Creemos en el poder de la tecnología para cambiar vidas, y cada día trabajamos para que más personas descubran su potencial en el mundo digital.</p>
        </div>
        <button class="btn" onclick="nextSlide()">
          Continuar <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Slide 3: Video Presentación -->
    <div class="slide">
      <div class="slide-content">
        <h1 class="slide-title">Conoce Novaklar</h1>
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/RGXrXUhM9kU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <button class="btn" onclick="nextSlide()">
          Ver Roles <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Slide 4: Revendedor -->
    <div class="slide">
      <div class="slide-content">
        <h1 class="slide-title"><i class="fas fa-store"></i> Revendedor</h1>
        <div class="scrollable-content">
          <p class="justified">Vende productos digitales directamente al cliente sin necesidad de invertir previamente. Solo pagas cuando ya tienes una venta confirmada, lo que elimina cualquier riesgo financiero inicial.</p>
          
          <p class="justified">Gestionas tus propias ventas y estableces relaciones directas con tus clientes. Tienes control completo sobre tus márgenes de ganancia.</p>
          
          <div class="highlight-box">
            <strong>Ejemplo práctico:</strong> Si un cliente compra una cuenta de HBO Max por $10.000, tú la adquieres por $5.000 y ganas $5.000 de ganancia inmediata sin tener que comprar el producto por adelantado.
          </div>
          
          <h3 class="section-title">Sistema de Pagos</h3>
          <p class="justified">Como revendedor, recibes el pago directamente de tus clientes. Con una parte de ese dinero adquieres el producto en nuestra plataforma para entregarlo a tu cliente, quedándote con tu ganancia.</p>
          
          <ul class="benefits-list">
            <li><i class="fas fa-check-circle"></i> Sin inversión inicial</li>
            <li><i class="fas fa-check-circle"></i> Margen de ganancia del 50% en promedio</li>
            <li><i class="fas fa-check-circle"></i> Control total de tus ventas</li>
            <li><i class="fas fa-check-circle"></i> Productos digitales de alta demanda</li>
          </ul>
        </div>
        <button class="btn" onclick="nextSlide()">
          Siguiente Rol <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Slide 5: Promotor -->
    <div class="slide">
      <div class="slide-content">
        <h1 class="slide-title"><i class="fas fa-bullhorn"></i> Promotor</h1>
        <div class="scrollable-content">
          <p class="justified">Promociona productos a través de enlaces o redes sociales sin necesidad de manejar el proceso de venta completo. Ideal para quienes tienen audiencia digital o habilidades en marketing.</p>
          
          <p class="justified">Ganas comisiones por cada venta generada a través de tus enlaces únicos. No necesitas atender consultas ni procesar pagos, todo es automático.</p>
          
          <div class="highlight-box">
            <strong>Ejemplo práctico:</strong> Si alguien compra Amazon Prime por $10.000 desde tu catálogo o enlace de afiliado, recibes $4.000 de comisión automáticamente, sin tener que atender consultas o procesar pagos.
          </div>
          
          <h3 class="section-title">Sistema de Pagos</h3>
          <p class="justified">Como promotor, recibes tus comisiones diariamente directamente en tu cuenta bancaria (Nequi, Daviplata, Bancolombia, etc.). Los pagos se procesan automáticamente por cada venta generada.</p>
          
          <ul class="benefits-list">
            <li><i class="fas fa-check-circle"></i> Comisiones automáticas</li>
            <li><i class="fas fa-check-circle"></i> Sin atención al cliente</li>
            <li><i class="fas fa-check-circle"></i> Ideal para redes sociales</li>
            <li><i class="fas fa-check-circle"></i> Herramientas de seguimiento</li>
          </ul>
        </div>
        <button class="btn" onclick="nextSlide()">
          Siguiente Rol <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Slide 6: Reclutador -->
    <div class="slide">
      <div class="slide-content">
        <h1 class="slide-title"><i class="fas fa-users"></i> Reclutador</h1>
        <div class="scrollable-content">
          <p class="justified">Amplía la red Novaklar invitando a nuevas personas y gana comisiones por sus primeras ventas. Perfecto para networkers y personas con amplios círculos sociales.</p>
          
          <p class="justified">Tu ingreso crece a medida que ayudas a otros a comenzar su camino en el mundo digital. Obtienes bonos por reclutamiento y porcentajes de las ventas de tu red.</p>
          
          <div class="highlight-box">
            <strong>Ejemplo práctico:</strong> Si reclutas a Laura y ella vende una cuenta de Paramount por $10.000, tú ganas una comisión por esa venta y por las cuatro siguientes que realice, creando así un flujo de ingresos recurrente.
          </div>
          
          <h3 class="section-title">Sistema de Pagos</h3>
          <p class="justified">Como reclutador, recibes comisiones diarias cada vez que uno de tus reclutados realice una venta. Los pagos se envían automáticamente a tu cuenta bancaria registrada.</p>
          
          <ul class="benefits-list">
            <li><i class="fas fa-check-circle"></i> Ingresos recurrentes</li>
            <li><i class="fas fa-check-circle"></i> Bonos por reclutamiento</li>
            <li><i class="fas fa-check-circle"></i> Crecimiento exponencial</li>
            <li><i class="fas fa-check-circle"></i> Capacitación para tu equipo</li>
          </ul>
        </div>
        <button class="btn" onclick="nextSlide()">
          Modelo de Negocio <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Slide 7: Modelo de Negocio -->
    <div class="slide">
      <div class="slide-content">
        <h1 class="slide-title">Modelo de Negocio</h1>
        <div class="scrollable-content">
          <p class="justified">Cada rol dentro de Novaklar opera con un enfoque distinto. Estos son los tres modelos que usamos:</p>
          
          <div class="business-model-card">
            <div class="model-icon"><i class="fas fa-store"></i></div>
            <h3>Modelo de Reventa Directa (Revendedores)</h3>
            <p>Compran productos a precio interno y los venden al cliente final con ganancia propia. Ellos gestionan el cobro y la entrega.</p>
            <p class="model-highlight">Ingresos controlados 100% por el revendedor.</p>
          </div>
          
          <div class="business-model-card">
            <div class="model-icon"><i class="fas fa-bullhorn"></i></div>
            <h3>Modelo de Afiliación por Comisión (Promotores)</h3>
            <p>Promocionan catálogos o enlaces y ganan una comisión por cada venta generada.</p>
            <p class="model-highlight">No manejan dinero del cliente. Reciben pagos diarios por medios digitales.</p>
          </div>
          
          <div class="business-model-card">
            <div class="model-icon"><i class="fas fa-users"></i></div>
            <h3>Modelo de Red de Afiliados (Reclutadores)</h3>
            <p>Invitan a nuevas personas y reciben comisiones cada vez que uno de sus afiliados hace una venta.</p>
            <p class="model-highlight">Ingresos escalables según el rendimiento de su red.</p>
          </div>
        </div>
        <button class="btn" onclick="nextSlide()">
          Requisitos <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Slide 8: Requisitos -->
    <div class="slide">
      <div class="slide-content">
        <h1 class="slide-title">Requisitos para ingresar</h1>
        <div class="scrollable-content">
          <p class="justified">¿Qué necesitas para trabajar con Novaklar?</p>
          
          <ul class="requirements-list">
            <li><i class="fas fa-check-circle"></i> Tener mínimo 14 años</li>
            <li><i class="fas fa-check-circle"></i> Vivir en Colombia</li>
            <li><i class="fas fa-check-circle"></i> Tener una cuenta activa en Nequi, Daviplata, Bancolombia o Movii</li>
            <li><i class="fas fa-check-circle"></i> Ser responsable, respetuoso y cumplido con los clientes</li>
          </ul>
          
          <div class="highlight-box">
            <p>No necesitas experiencia previa ni invertir dinero. ¡Solo ganas y compromiso!</p>
          </div>

          <div class="images-grid">
            <img src="https://raw.githubusercontent.com/novaklar/info/refs/heads/main/16.png" alt="Requisitos Novaklar">
            <img src="https://raw.githubusercontent.com/novaklar/info/refs/heads/main/17.png" alt="Requisitos Novaklar">
            <img src="https://raw.githubusercontent.com/novaklar/info/refs/heads/main/18.png" alt="Requisitos Novaklar">
            <img src="https://raw.githubusercontent.com/novaklar/info/refs/heads/main/19.png" alt="Requisitos Novaklar">
          </div>
        </div>
        <button class="btn" onclick="openModal()">
          Acceder a Capacitación <i class="fas fa-graduation-cap"></i>
        </button>
      </div>
    </div>

    <!-- Slide 9: Capacitación -->
    <div class="slide">
      <div class="slide-content">
        <h1 class="slide-title">Capacitación</h1>
        <div class="scrollable-content">
          <p class="justified">Aprende todo lo necesario para tener éxito en tu rol con nuestro programa completo de capacitación:</p>
          
          <div class="video-container" id="trainingVideoContainer">
            <!-- El video se mostrará aquí después de pasar el modal -->
          </div>
        </div>
        <button class="btn" onclick="nextSlide()">
          Finalizar <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Slide 10: Finalizar -->
    <div class="slide">
      <div class="slide-content">
        <h1 class="slide-title">¡Estás listo para comenzar!</h1>
        <div class="scrollable-content">
          <div class="audio-container">
            <audio controls autoplay>
              <source src="https://raw.githubusercontent.com/novaklar/reclutamiento/main/luvvoice.com-20250714-KGWYSW.mp3" type="audio/mpeg">
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
          
          <p class="justified">Contáctanos ahora mismo para comenzar tu proceso de afiliación:</p>
          
          <div class="contacts-grid">
            <a href="https://wa.me/573216495733" class="contact-btn whatsapp-btn" target="_blank">
              <i class="fab fa-whatsapp"></i> Ester
            </a>
            
            <a href="https://wa.me/573027069328" class="contact-btn whatsapp-btn" target="_blank">
              <i class="fab fa-whatsapp"></i> Katherin
            </a>
            
            <a href="https://wa.me/573025697553" class="contact-btn whatsapp-btn" target="_blank">
              <i class="fab fa-whatsapp"></i> Gabriela
            </a>
            
            <a href="https://wa.me/573027069188" class="contact-btn whatsapp-btn" target="_blank">
              <i class="fab fa-whatsapp"></i> Neyereht
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Navegación -->
  <div class="navigation">
    <button class="nav-btn active" onclick="goToSlide(0)"></button>
    <button class="nav-btn" onclick="goToSlide(1)"></button>
    <button class="nav-btn" onclick="goToSlide(2)"></button>
    <button class="nav-btn" onclick="goToSlide(3)"></button>
    <button class="nav-btn" onclick="goToSlide(4)"></button>
    <button class="nav-btn" onclick="goToSlide(5)"></button>
    <button class="nav-btn" onclick="goToSlide(6)"></button>
    <button class="nav-btn" onclick="goToSlide(7)"></button>
    <button class="nav-btn" onclick="goToSlide(8)"></button>
    <button class="nav-btn" onclick="goToSlide(9)"></button>
  </div>

  <!-- Modal de confirmación -->
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-icon"><i class="fas fa-graduation-cap"></i></div>
        <h2 class="modal-title">Confirmar Acceso</h2>
      </div>
      <p class="modal-text">
        Para acceder a la capacitación, confirma que:
      </p>
      
      <div class="checkbox-group">
        <div class="checkbox-item">
          <input type="checkbox" id="confirmInfo" onchange="checkConditions()">
          <label for="confirmInfo">He revisado toda la información</label>
        </div>
        
        <div class="checkbox-item">
          <input type="checkbox" id="confirmRole" onchange="checkConditions()">
          <label for="confirmRole">He seleccionado un rol</label>
        </div>
      </div>
      
      <button class="btn modal-btn" id="modalContinueBtn" disabled onclick="continueToTraining()">
        ✅ Acceder a Capacitación
      </button>
      
      <p class="contacts-title">¿Necesitas ayuda?</p>
      
      <div class="contacts-grid">
        <a href="https://wa.me/573216495733" class="contact-btn whatsapp-btn" target="_blank">
          <i class="fab fa-whatsapp"></i> Ester
        </a>
        
        <a href="https://wa.me/573027069328" class="contact-btn whatsapp-btn" target="_blank">
          <i class="fab fa-whatsapp"></i> Katherin
        </a>
        
        <a href="https://wa.me/573025697553" class="contact-btn whatsapp-btn" target="_blank">
          <i class="fab fa-whatsapp"></i> Gabriela
        </a>
        
        <a href="https://wa.me/573027069188" class="contact-btn whatsapp-btn" target="_blank">
          <i class="fab fa-whatsapp"></i> Neyereht
        </a>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
