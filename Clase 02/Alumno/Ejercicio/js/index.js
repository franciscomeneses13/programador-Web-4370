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
}