

function setLocalList(key, array) {
  console.log('aca estoy ejecutando la funcion setLocalList con los argumentos: ' + key + ' ' + array)
  var isString = typeof key === 'string'
  var isArray = Array.isArray(array)
  if (!isString || !isArray) {
    return false
  }
  var strArray = JSON.stringify(array)
  localStorage.setItem(key, strArray)
  return true

}
console.log('aca empieza a ejectuar')
var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']
console.log(setLocalList('studentsList', testList))
console.log('aca termine de ejecutar')
