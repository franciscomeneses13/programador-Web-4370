$(document).ready(function () {
  $(document).keydown(changeCounter)
})

var counter = 0;

function changeCounter(event) {
  var key = event.which
  console.log(key)
  switch (key) {
    case 13:
      counter = 0
      break;
    case 38:
      counter += 1;
      break;
    case 40:
      counter -= 1;
      break;
  }
  $('#counter').html(counter)
}