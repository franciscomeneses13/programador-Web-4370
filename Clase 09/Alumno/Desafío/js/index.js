window.onload = function () {
  var email = document.getElementById('email')
  email.onblur = function (event) {
    var value = event.target.value
    var isValidEmail = value.indexOf('@') > -1 && value.indexOf('.') > -1
    if (isValidEmail) {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    } else {
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')
    }
  }
}