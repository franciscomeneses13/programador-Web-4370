var auto1 = {
  puertas: 4,
  airbag: false,
  color: 'rojo',
  marva: 'vw',
  modelo: 1998,
  km: 10000
}

var auto2 = {
  puertas: 4,
  airbag: true,
  color: 'negro',
  marva: 'bmw',
  modelo: 2015,
  km: 0
}

function Auto(puertas, airbag, color, marca) {
  this.puertas = puertas;
  this.airbag = airbag;
  this.color = color;
  this.marca = marca;
}

console.log(auto1)
var autoNuevo = new Auto(4, true, 'gris', 'chery')
console.log(autoNuevo)  