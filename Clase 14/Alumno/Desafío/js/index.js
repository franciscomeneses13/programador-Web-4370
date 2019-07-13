// esperar document ready
$(document).ready(function () {
  // asociar a todos los botones de borrar la funcion de handle del evento que va a borrar el elemento
  $('.btn-danger').click(function (event) {
    var button = $(event.target)
    //en la funcion que hace el handle del evento, obtener el id del tr y llamar a la funcion removeElementWithAnimation(id)
    var id = button.parent().parent().attr('id')
    removeElementWithAnimation(id)
  })
  //implementar la funcion removeElementWithAnimation(id) donde la funcion recibe el id del elemento a eliminar

  function removeElementWithAnimation(id) {
    $('#' + id).fadeOut(3000, function () {
      //obtener el elemento usando selector de jquery con el id provisto en la funcion usando kquery fadeOut or slideUp, remover el elemento
      $(`#${id}`).remove()
    })
  }

})






