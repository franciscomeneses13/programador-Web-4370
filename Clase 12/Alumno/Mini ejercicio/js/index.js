$(document).ready(function () {
  //treaer el texto del input
  // en el onblur reemplazar todos lostextos de los li con el texto del input
  var input = $('#firstName')
  input.blur(replaceAllElements)
});

function replaceAllElements(e) {
  $('.list-group-item').html(e.target.value)
}