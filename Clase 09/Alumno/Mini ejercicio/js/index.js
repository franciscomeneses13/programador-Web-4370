window.onload = function () {
  console.log('is working!')
  var field = document.getElementById('age')
  var button = document.getElementById('button')
  button.onclick = function (e) {
    var value = parseInt(field.value)
    if (isNaN(value)) {
      field.value = ''
      alert('no es una edad valida')
      return
    }
    var isOlderThan18 = value > 18
    if (isOlderThan18) {
      console.log('es mayor')
    } else {
      console.log('es menor')
    }
  }
}