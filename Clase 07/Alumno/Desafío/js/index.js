function getLocalList(key) {

  //validar si key es string, si no lo es, retornar false
  var isString = typeof key === 'string'
  if (!isString) {
    return false
  }
  //traer item del localStorage para esa key.
  var value = localStorage.getItem(key)

  //(no es un paso)si el item no está seteado devuelve null(falsy) if(null)
  //si tengo el item, lo parseo y veo si lo que parsié es un array
  if (!value) {
    return []
  }

  var arrayParseado = JSON.parse(value)
  // si es un array valido lo retorno
  var isArray = Array.isArray(arrayParseado)
  // si el item no existe (que me retorno null) devuelve array vacio: return
  if (!isArray) {
    return []
  }
  return arrayParseado
}

localStorage.setItem('studentsList', '[1,2,3]')

var studentsList = getLocalList('studentsList')

console.log(studentsList)