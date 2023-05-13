<?php
$conexion = mysqli_connect("localhost", "root", "", "tempdb");

if (!$conexion) {
    die("La conexión falló: " . mysqli_connect_error());
}
?>
