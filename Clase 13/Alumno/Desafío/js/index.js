$(document).ready(function () {
  var firstName = $('#firstName');
  var email = $('#email');
  var comments = $('#comments')
  var submitButton = $('#submitButton')

  firstName.one('blur', validateNotEmptyField)
  comments.one('blur', validateNotEmptyField)
  email.one('blur', validateEmail)
  function validateEmail(event) {
    var input = $(event.target)
    input.next().remove()
    var errorText = ''
    var value = input.val()
    if (value.indexOf('.') > -1 && (value.indexOf('@') > -1)) {
      input.addClass('is-valid')
      input.removeClass('is-invalid')
    } else {
      errorText = 'Ingresa un email válido'
      input.addClass('is-invalid').removeClass('is-valid')
      input.parent().append(`<div class='invalid-feedback'>${errorText}</div>`)
    }

    if (event.type === 'blur') {
      input.on('input', validateEmail)
    }
    allValidationsOk()
  }

  function validateNotEmptyField(event) {
    var input = $(event.target)
    input.next().remove()
    var errorText = ''
    var valueToValidate = input.val();
    if (valueToValidate.length > 0) {
      //codigo si es valido
      input.addClass('is-valid').removeClass('is-invalid')
    } else {
      errorText = 'Campo obligatorio'
      input.addClass('is-invalid').removeClass('is-valid')
      input.parent().append(`<div class='invalid-feedback'>${errorText}</div>`)
      //codigo si no es valido
    }

    //asociar la validacion el evento input
    if (event.type === 'blur') {
      input.on('input', validateNotEmptyField)
    }
    allValidationsOk()
  }

  function allValidationsOk() {
    var allOk = $('.is-valid').length === 3
    if (allOk) {
      submitButton.attr('disabled', false)
    } else {
      submitButton.attr('disabled', true)
    }
  }
})


//solucion del profe

// $(document).ready(function(){
//   var firstName = $('#firstName');
//   var email = $('#email');
//   var comments = $('#comments')
//   var submitButton = $('#submitButton')

//   firstName.one('blur', validateNotEmptyField)
//   comments.one('blur', validateNotEmptyField)
//   email.one('blur', validateEmail)

//   function validateEmail(event){
//     var input = $(event.target)
//     input.next().remove()
//     var errorText = ''
//     var valueToValidate = input.val();
//     var containsAt = valueToValidate.indexOf('@') > -1
//     var containsDot = valueToValidate.indexOf('.') > -1
//     if (valueToValidate.length < 1) {
//       errorText = errorText + 'Campo requerido '
//     }
//     if (!containsAt) {
//       errorText = errorText + 'Debe contener arroba (@) '
//     }
//     if (!containsDot) {
//       errorText = errorText + 'Debe contener punto (.) '
//     }
//     if(errorText === ''){
//       //codigo si es valido
//       input.addClass('is-valid').removeClass('is-invalid')
//     } else {
//       input.addClass('is-invalid').removeClass('is-valid')
//       input.parent().append(`<div class='invalid-feedback'>${errorText}</div>` )
//       //codigo si no es valido
//     }

//     //asociar la validacion el evento input
//     if(event.type === 'blur') {
//       input.on('input', validateEmail)
//     }
//     allValidationsOk()
//   }
//   function validateNotEmptyField(event){
//     console.log(event.type)
//     var input = $(event.target)
//     input.next().remove()
//     var errorText = ''
//     var valueToValidate = input.val();
//     if(valueToValidate.length > 0){
//       //codigo si es valido
//       input.addClass('is-valid').removeClass('is-invalid')
//     } else {
//       errorText = 'Campo obligatorio'
//       input.addClass('is-invalid').removeClass('is-valid')
//       input.parent().append(`<div class='invalid-feedback'>${errorText}</div>` )
//       //codigo si no es valido
//     }

//     //asociar la validacion el evento input
//     if(event.type === 'blur') {
//       input.on('input', validateNotEmptyField)
//     }
//     allValidationsOk()
//   }

//   function allValidationsOk(){
//     var allOk = $('.is-valid').length === 3
//     if(allOk) {
//       submitButton.attr('disabled', false)
//     } else {
//       submitButton.attr('disabled', true)
//     }
//   }
// })


