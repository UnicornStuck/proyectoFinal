<?php
    require_once('conndb.php');

    $nick = $_REQUEST['nickname'];
    $pass = $_REQUEST['password'];

    session_start();

    $sql = "SELECT * FROM usersmafe WHERE (nick = '$nick' AND passw = '$pass')";
    $resultado = mysqli_query($conexion, $sql);
    $num_filas = mysqli_num_rows($resultado);


    if ($num_filas > 0) {
        $fila = mysqli_fetch_assoc($resultado);
        $_SESSION['fila'] = $fila;
        echo "<h3>" .$fila['nick'] ."</h3>";
        header('location: ../home.php');
    } else {
        $sql = "INSERT INTO usersmafe (nick, passw) VALUES ('$nick', '$pass')";
        $resultado = mysqli_query($conexion, $sql);
        header('location: ../mokepon.php');
    }
    exit;
?>