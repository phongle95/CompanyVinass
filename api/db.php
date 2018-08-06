<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $servername = "localhost";
    // $username = "hoctien1_root";
    // $password = "Anhyeuem1.";
    // $dbname = "hoctien1_tripcar";
    $username = "root";
    $password = ""; 
    $dbname = "tripcar";
    $conn = new mysqli($servername, $username, $password, $dbname);
?>