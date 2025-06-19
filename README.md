<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novaklar - Oportunidades Digitales</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comme:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        @font-face {
            font-family: 'Waratah';
            src: url('https://raw.githubusercontent.com/novaklar/web/main/waratah.ttf') format('truetype');
        }
        
        body {
            font-family: 'Comme', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        .header {
            width: 100%;
            padding: 40px 20px;
            background-color: #00128f;
            color: white;
            margin-bottom: 40px;
            text-align: center;
            box-sizing: border-box;
        }
        
        .logo {
            width: 180px;
            max-width: 100%;
            margin-bottom: 20px;
            filter: invert(48%) sepia(95%) saturate(1283%) hue-rotate(202deg) brightness(102%) contrast(101%);
        }
        
        .name {
            font-family: 'Waratah', sans-serif;
            font-size: 42px;
            font-weight: normal;
            text-transform: lowercase;
            margin-bottom: 10px;
            color: white;
            letter-spacing: 1px;
        }
        
        .slogan {
            font-size: 20px;
            margin-bottom: 0;
            color: rgba(255,255,255,0.9);
            font-weight: 300;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .container {
            width: 100%;
            max-width: 900px;
            padding: 0 20px;
            box-sizing: border-box;
            margin-bottom: 40px;
        }
        
        .intro-text {
            background: transparent;
            padding: 0 20px;
            margin-bottom: 40px;
            text-align: center;
            width: calc(100% - 40px);
            margin-left: auto;
            margin-right: auto;
            box-sizing: border-box;
        }
        
        .intro-text p {
            font-size: 18px;
            text-align: justify;
            color: #333;
            margin-bottom: 20px;
        }
        
        .roles-section {
            width: 100%;
            background: linear-gradient(135deg, #6c91ff 0%, #00128f 100%);
            color: white;
            padding: 60px 20px;
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
        }
        
        .roles-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0;
            position: relative;
            z-index: 1;
            width: 100%;
            box-sizing: border-box;
        }
        
        .roles-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
            margin-top: 40px;
            width: 100%;
        }
        
        .role-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 30px;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
            width: calc(100% - 60px);
            margin: 0 auto;
            box-sizing: border-box;
        }
        
        .role-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.25);
        }
        
        h2 {
            color: white;
            font-size: 32px;
            margin-top: 0;
            margin-bottom: 25px;
            font-weight: 600;
            text-align: center;
            position: relative;
            padding-bottom: 15px;
        }
        
        h2:after {
            content: '';
            display: block;
            width: 80px;
            height: 2px;
            background: rgba(255,255,255,0.5);
            margin: 15px auto 0;
        }
        
        h3 {
            color: white;
            font-size: 22px;
            margin-top: 0;
            margin-bottom: 15px;
            text-align: center;
            font-weight: 600;
        }
        
        p {
            margin-bottom: 20px;
            font-size: 18px;
            text-align: justify;
            color: #333;
        }
        
        .role-card p {
            color: rgba(255,255,255,0.9);
            text-align: justify;
            margin-bottom: 15px;
        }
        
        .role-card .example {
            background: rgba(0, 0, 0, 0.15);
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            font-size: 16px;
            text-align: justify;
            border-left: 3px solid rgba(255,255,255,0.3);
        }
        
        .role-card .example strong {
            color: white;
        }
        
        .video-container {
            width: calc(100% - 40px);
            max-width: 800px;
            margin: 0 auto 40px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .video-container iframe {
            width: 100%;
            height: 450px;
            border: none;
        }
        
        @media (min-width: 768px) {
            .roles-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 30px;
            }
            
            .role-card {
                width: 100%;
                margin: 0;
                min-height: 400px;
                display: flex;
                flex-direction: column;
            }
            
            .header {
                padding: 40px 0;
            }
            
            .roles-section {
                padding: 60px 0;
            }
        }
        
        @media (max-width: 767px) {
            .logo {
                width: 140px;
            }
            
            .name {
                font-size: 36px;
            }
            
            .slogan {
                font-size: 18px;
            }
            
            .intro-text {
                padding: 0 20px;
                width: calc(100% - 40px);
            }
            
            h2 {
                font-size: 28px;
            }
            
            h3 {
                font-size: 20px;
            }
            
            p, .intro-text p {
                font-size: 16px;
            }
            
            .video-container {
                width: calc(100% - 40px);
            }
            
            .video-container iframe {
                height: 250px;
            }
            
            .role-card {
                padding: 25px 20px;
                width: calc(100% - 40px);
                min-height: auto;
            }
            
            .roles-grid {
                gap: 30px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="https://raw.githubusercontent.com/novaklar/web/refs/heads/main/Novaklar.svg" alt="Novaklar Logo" class="logo">
        
        <div class="name">novaklar</div>
        
        <div class="slogan">Ingresos digitales, oportunidades reales</div>
    </div>
    
    <div class="container">
        <div class="intro-text">
            <p>novaklar es una empresa digital que transforma la forma de generar ingresos en línea. Desde 2023, hemos creado una comunidad que conecta a personas con oportunidades reales y accesibles, ofreciendo productos digitales como streaming, recargas, suscripciones y mucho más.</p>
            
            <p>Nuestro modelo de trabajo es flexible, inclusivo y pensado para todos. Puedes ser revendedor, promotor o reclutador, sin necesidad de inversión previa. En novaklar, creces a tu ritmo y con el respaldo de un equipo comprometido.</p>
            
            <p>Más que una marca, somos un movimiento. Creemos en el poder de la tecnología para cambiar vidas, y cada día trabajamos para que más personas descubran su potencial en el mundo digital.</p>
        </div>
        
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/3slcTVh2pGw?si=l7sCSxkG8btxB042" allowfullscreen></iframe>
        </div>
    </div>
    
    <div class="roles-section">
        <div class="roles-container">
            <h2>Cargos</h2>
            
            <div class="roles-grid">
                <div class="role-card">
                    <h3>Revendedor</h3>
                    <p>Vende productos digitales directamente al cliente sin necesidad de invertir previamente. Solo pagas cuando ya tienes una venta confirmada, lo que elimina cualquier riesgo financiero inicial. Gestionas tus propias ventas y estableces relaciones directas con tus clientes.</p>
                    <div class="example">
                        <strong>Ejemplo:</strong> Si un cliente compra una cuenta de HBO Max por $10.000, tú la adquieres por $5.000 y ganas $5.000 de ganancia inmediata sin tener que comprar el producto por adelantado.
                    </div>
                </div>
                
                <div class="role-card">
                    <h3>Promotor</h3>
                    <p>Promociona productos a través de enlaces o redes sociales sin necesidad de manejar el proceso de venta completo. Ideal para quienes tienen audiencia digital o habilidades en marketing. Ganas comisiones por cada venta generada a través de tus enlaces únicos.</p>
                    <div class="example">
                        <strong>Ejemplo:</strong> Si alguien compra Amazon Prime por $10.000 desde tu catálogo o enlace de afiliado, recibes $4.000 de comisión automáticamente, sin tener que atender consultas o procesar pagos.
                    </div>
                </div>
                
                <div class="role-card">
                    <h3>Reclutador</h3>
                    <p>Amplía la red Novaklar invitando a nuevas personas y gana comisiones por sus primeras ventas. Perfecto para networkers y personas con amplios círculos sociales. Tu ingreso crece a medida que ayudas a otros a comenzar su camino en el mundo digital.</p>
                    <div class="example">
                        <strong>Ejemplo:</strong> Si reclutas a Laura y ella vende una cuenta de Paramount por $10.000, tú ganas una comisión por esa venta y por las cuatro siguientes que realice, creando así un flujo de ingresos recurrente.
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
