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
        }
        
        .header {
            width: 100%;
            padding: 40px 0;
            background-color: #00128f;
            color: white;
            margin-bottom: 40px;
            text-align: center;
        }
        
        .logo {
            width: 180px;
            margin-bottom: 20px;
            /* Logo en color #6c91ff */
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
        }
        
        .content-box {
            background: white;
            border-radius: 8px;
            padding: 40px;
            margin-bottom: 40px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            text-align: center;
        }
        
        h1 {
            color: #00128f;
            font-size: 32px;
            margin-top: 0;
            margin-bottom: 25px;
            font-weight: 600;
            text-align: center;
        }
        
        h1:after {
            content: '';
            display: block;
            width: 60px;
            height: 3px;
            background: #6c91ff;
            margin: 15px auto 0;
        }
        
        p {
            margin-bottom: 20px;
            font-size: 18px;
            text-align: justify;
            color: #333; /* Texto uniforme */
        }
        
        .video-container {
            width: 100%;
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
        
        .cta-button {
            display: block;
            background-color: #6c91ff;
            color: white;
            padding: 15px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 500;
            font-size: 18px;
            margin: 30px auto 0;
            transition: all 0.3s ease;
            max-width: 300px;
            box-shadow: 0 4px 8px rgba(108, 145, 255, 0.3);
            text-align: center;
        }
        
        .cta-button:hover {
            background-color: #00128f;
            transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
            .logo {
                width: 140px;
            }
            
            .name {
                font-size: 36px;
            }
            
            .slogan {
                font-size: 18px;
                padding: 0 20px;
            }
            
            .content-box {
                padding: 25px 20px;
            }
            
            h1 {
                font-size: 28px;
            }
            
            p {
                font-size: 16px;
            }
            
            .video-container iframe {
                height: 250px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="https://raw.githubusercontent.com/novaklar/web/refs/heads/main/Novaklar.svg" alt="Novaklar Logo" class="logo">
        
        <div class="name">novaklar</div>
        
        <div class="slogan">Transformamos la forma de generar ingresos en línea.</div>
    </div>
    
    <div class="container">
        <div class="content-box">
            <h1>¿Qué es novaklar?</h1>
            <p>novaklar es una empresa digital que transforma la forma de generar ingresos en línea. Desde 2023, hemos creado una comunidad que conecta a personas con oportunidades reales y accesibles, ofreciendo productos digitales como streaming, recargas, suscripciones y mucho más.</p>
            
            <p>Nuestro modelo de trabajo es flexible, inclusivo y pensado para todos. Puedes ser revendedor, promotor o reclutador, sin necesidad de inversión previa. En novaklar, creces a tu ritmo y con el respaldo de un equipo comprometido.</p>
            
            <p>Más que una marca, somos un movimiento. Creemos en el poder de la tecnología para cambiar vidas, y cada día trabajamos para que más personas descubran su potencial en el mundo digital.</p>
            
            <a href="#contacto" class="cta-button">Únete a nuestro equipo</a>
        </div>
        
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/3slcTVh2pGw?si=l7sCSxkG8btxB042" allowfullscreen></iframe>
        </div>
    </div>
</body>
</html>
