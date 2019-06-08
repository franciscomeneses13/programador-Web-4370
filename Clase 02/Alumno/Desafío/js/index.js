// var genero = prompt('ingrese tu genero')
// var edad = prompt('ingresa tu edad')
// var prefijo

// switch (genero) {
//     case 'male':
//         prefijo = 'Sr.'
//         break;
//     case 'female':
//         prefijo = 'Sra.'
//         break;
//     default:
//         prefijo = 'Sx.'
//         break;
// }

// if (prefijo = 'Sr' && edad < 18) {
//     console.log('Sr. usted es menor de edad no puede ingresar')
// } else if (prefijo = 'Sra' && edad < 18) {
//     console.log('Sra. usted es menor de edad no puede ingresar')
// } 

var genero = prompt('ingrese su genero: ')
var edad = prompt('ingrese su edad: ')
edad = parseInt(edad)
genero = genero.toLowerCase()

var prefijo

switch (genero) {
    case 'male':
        prefijo = 'Sr.'
        break
    case 'female':
        prefijo = 'Sra.'
        break
    default:
        prefijo = 'Sx.'
        break
}

var mensaje;
console.log(edad)
console.log(mensaje)
console.log(prefijo)
if (edad >= 18) {
    mensaje = 'usted es mayor de edad puede ingresar'
} else {
    mensaje = 'usted es mejor de edad y no puede ingresar'
}
console.log(mensaje)
console.log(prefijo + ' ' + mensaje)


if (genero === 'male') {
    console.log ('es male')
} else if (genero === 'female'){
    console.log ('es female')
} else {
    console.log('sx.')
}
 