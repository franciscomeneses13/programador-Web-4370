// function diaSemanaNumero(dia) {
//   switch (dia) {
//     case 'lunes':
//       return 1
//     case 'martes':
//       return 2
//     case 'miercoles':
//       return 3
//     case 'jueves':
//       return 4
//     case 'viernes':
//       return 5
//     case 'sabado':
//       return 6
//     case 'domingo':
//       return 7
//     default
//       return 0
//   }
// }

function diaSemanaNumero(dia) {
  var diaLower = dia.toLowerCase()
  var diaSemanaNum = {
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6,
    domingo: 7,
  }
  var numeroDeDia = diaSemanaNum[diaLower]
  console.log(diaSemanaNum.diaLower)
  //diaSemanaNum.'-domingo'
  console.log(diaSemanaNum.lunes)
  numeroDeDia
  if (!numeroDeDia) {
    return numeroDeDia
  }
  return 0
}

function diaNumeroSemana(numero) {
  var dias = ('lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo')
  return dias[numero - 1]
}
console.log(diaSemanaNumero('domingo'))