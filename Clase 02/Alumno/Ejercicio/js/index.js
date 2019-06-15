<<<<<<< HEAD
var dia = prompt('ingrese el día de la semana')
var diaMinuscula = dia.toLowerCase()
var lunes = 'lunes'

switch (diaMinuscula) {
    case lunes:
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log('dia habil')
        break;
    case 'sabado':
    case 'domingo':
        console.log('The Weeknd B-)')
        break;
    default:
        console.log('A trabajar!')
        break;
=======
var dia = prompt('Ingrese dia')
var diaMinuscula = dia.toLowerCase()

switch (diaMinuscula) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('dia habil')
    break;
  case 'sabado':
  case 'domingo':
    console.log('finde :)')
    break;
  default:
    console.log('No es un dia valido')
    break;
>>>>>>> 7f43d56ea0537cbc489fb9d73aaa6c9d7b84e363
}