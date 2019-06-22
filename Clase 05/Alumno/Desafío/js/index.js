var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]



function Alumno(firstName, lastName, dni, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dni = dni;
  this.email = email;
  var id = Date.now()
  this.getId = function () {
    return id
  }
}

Alumno.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName
}
