<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>mokepon</title>
</head>
<body>
    <!-- Titulos -->
    <div id="titles">
        <h1 class="titulo">Mokepón</h1>
        <h2 class="subtitulo">Selecciona tu mokepón</h2>
    </div>
    <div id="titlesFight">
        <h1 id="titles">¡Pelea!</h1>
    </div>
    <!-- Área de selección de personaje -->
    <section id="selectionMokepon">
        <div id="tarjetasContainer" class="tarjetas">

        </div>
        <button id="seleccionMascotaBtn">Seleccionar</button>
    </section>
    <!-- Área de selección de ataque -->
    <section id="SelectionAttack">
        <div id="mokeponPresentacion">
            <div id="mokeponPresentacionImg">
                <div id="mokeponPresentacionImgJugador">
                    <p>Tu <b><span id="mascotaJugador">mokepon</span></b> tiene <span id="vidasJugador">3</span> vidas</p>
                </div>
                <div id="mokeponPresentacionImgEnemigo">
                    <p>El <b><span id="mascotaEnemigo">mokepon</span></b> rival tiene <span id="vidasEnemigo">3</span> vidas</p>
                </div>
            </div>
        </div>
        <h2 class="subtitulo">Selecciona tu próximo ataque</h2>
        <div class="ataquesContainer">
            <!-- Botones -->
            <div class="BotonesAtaques" id="ataquesContainer">

            </div>
            <div class="Anuncios">
                <!-- Resultado partida -->
                <section id="finalMessage"></section>
                <!-- Botón reiniciar -->
                <section id="reset"><button id="resetBtn">Reiniciar partida</button></section>
                <!-- Anuncios de Ataque -->
                <section id="messages"></section>
            </div>
        </div>
    </section>
    <div class="InfoContainer">
        <div class="dev">
            <img src="img/Mafe.png" alt="Dev imagen" id="fotoDev">
            <div class="internalDev">
                <h3>Developed by MAFE</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="user">
        <?php
        session_start();
        $fila = $_SESSION['fila'];
        echo "<h3>" .$fila['nick'] ."</h3>";
        ?>
        </div>
    </div>
    <script src="js/mokepon.js"></script>
    <script src="jquery-3.6.4.min.js"></script>
</body>
</html>