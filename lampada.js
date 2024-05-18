var lamp = window.document.getElementById('lampada')
function quebrada() {
    return lamp.src.index0f('quebra') > -1
}
function ligar(){
    lamp.src = 'img/lig.svg'
}
function desliga(){
   lamp.src = 'img/desligada.svg'
}
lamp.addEventListener ('click', quebrar)
function quebrar(){
    lamp.src = 'quebra.svg'
}
