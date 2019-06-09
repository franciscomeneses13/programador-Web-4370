function buscarAlumnoPorNombre(nombreOApellido, listaAlumnos) {
  var nombreLower = nombreOApellido.toLowerCase();
  for (var i = 0; i < listaAlumnos.length; i++) {
    if (listaAlumnos[i].firstName.toLowerCase() === nombreLower) {
      return i
    }
  }
  return -1
}

function buscarAlumnoPorApellido(nombreOApellido, listaAlumnos) {
  var apellidoLower = nombreOApellido.toLowerCase();
  for (var i = 0; i < listaAlumnos.length; i++) {
    if (listaAlumnos[i].lastName.toLowerCase() === apellidoLower) {
      return i
    }
  }
  return -1
}

function buscarAlumnoPorNombreYApellido(nombreOApellido, listaAlumnos) {
  var nombreLower = nombreOApellido.toLowerCase();
  var apellidoLower = nombreOApellido.toLowerCase();
  for (var i = 0; i < listaAlumnos.length; i++) {
    if (listaAlumnos[i].firstName.toLowerCase() === nombreLower
      || listaAlumnos[i].lastName.toLowerCase() === apellidoLower) {
      return i
    }
  }
  return -1
}


var listaAlumnos = [
  {
    firstName: 'a',
    lastName: 'a',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]
var nombreOApellido = prompt('Ingrese nombre o apellido: ')
var posicion = buscarAlumnoPorNombreYApellido(nombreOApellido, listaAlumnos);
console.log(posicion)


