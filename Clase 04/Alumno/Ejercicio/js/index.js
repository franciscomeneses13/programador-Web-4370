var examResults = [7, 5, 6, 4, 3, 2, 8, 9]

function promedio(arrayDeNumeros) {
  var acumulador = 0;
  for (var i = 0; i < arrayDeNumeros.length; i += 1) {
    acumulador = acumulador + arrayDeNumeros[i]
  }
  return acumulador / arrayDeNumeros.length;
}

console.log(promedio(examResults))
console.log(examResults)