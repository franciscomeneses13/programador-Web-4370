var operacion = prompt('Ingrese operacion')
var op1
var op2

switch (operacion) {
  case 'suma':
    var op1 = parseInt(prompt('ingrese operando 1'))
    var op2 = parseInt(prompt('ingrese operando 2'))
    console.log(op1 + op2)
    break
  case 'division':
    var op1 = parseInt(prompt('ingrese operando 1'))
    var op2 = parseInt(prompt('ingrese operando 2'))
    while (op2 === 0) {
      op2 = parseInt(prompt('ingrese operando 2 distinto a 0, pelotudo!'))
    }
    console.log(op1 / op2)
    break
}