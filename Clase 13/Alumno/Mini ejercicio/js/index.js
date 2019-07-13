$(document).ready(function () {
  // asocial el evento al tacho de basura
  // cuando alguien hace click al tacho de basura borrar el li que lo contiene
  $('ul > li >i')
    .click(function (event) {
      $(event.target)
        .parent()
        .remove()
    })
})