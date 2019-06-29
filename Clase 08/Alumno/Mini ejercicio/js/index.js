var tituloNuevo = prompt('Ingrese titulo nuevo')
var textoNuevo = prompt('Ingrese texto nuevo')

var titleNode = document.getElementById('title')

titleNode.innerHTML = tituloNuevo

var textNode = document.getElementById('text')

textNode.innerHTML = textoNuevo