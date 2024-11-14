var $ligar = document.getElementById('ligar')
var $desligar = document.getElementById('desligar')
var $lampada = document.getElementById('lamp')


function ligarLamp () {
 
    $lampada.src = 'imagens/lampada-acesa.jpg'
}

function desligarLamp(){

    $lampada.src = 'imagens/lampada-apagada.jpg'
}

function quebrarLamp(){

    $lampada.scr = 'imagens/lampada-quebrada.jpg'

}

$ligar.addEventListener('click' ,ligarLamp)

$desligar.addEventListener('click', desligarLamp)

$lampada.addEventListener('mouseover', ligarLamp)

$lampada.addEventListener('mouseleave', desligarLamp)

$lampada.addEventListener('dblclick',quebrarLamp);
