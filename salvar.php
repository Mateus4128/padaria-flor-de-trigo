<?php
$conexao = mysqli_connect("localhost", "root", "", "padaria_flor_de_trigo");

$nome = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$mensagem = $_POST["mensagem"];

$sql = "INSERT INTO mensagens (nome_cliente, email, telefone, mensagem) 
        VALUES ('$nome', '$email', '$telefone', '$mensagem')";

if (mysqli_query($conexao, $sql)) {
  
  header("Location: index.html?enviado=1#contato");
  exit();
} else {
  echo "Erro ao salvar: " . mysqli_error($conexao);
}
?>