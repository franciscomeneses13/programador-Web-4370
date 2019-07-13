$(document).ready(function () {
  var email = $('#email')
  email.blur(handleInput)
});

function handleInput(event) {
  var email = $(event.target)
  var value = email.val()
  if (value.indexOf('.') > -1 && (value.indexOf('@') > -1)) {
    //  email.classList.add('is-valid')
    email.addClass('is-valid')
    //  email.classList.remove('is-invalid')
    email.removeClass('is-invalid')
  } else {
    //  email.classList.add('is-invalid')
    email.addClass('is-invalid')
    //  email.classList.remove('is-valid')
    email.removeClass('is-valid')
  }

}

