var $ligar = document.getElementById('ligar')
var $desligar = document.getElementById('desligar')
var $lampada = document.getElementById('lamp')



function ligarLamp () {

    $lampada.src = 'imagens/lampada-acesa.jpg'
}

$ligar.addEventListener('click' ,ligarLamp)