window.onload = function () {
  var texts = ['Ed', 'Edd', 'Eddy']
  var list = document.getElementById('mainList')
  for (var i = 0; i < texts.length; i++) {
    var item = document.createElement('li')
    item.className = 'list-group-item'
    item.innerHTML = texts[i]
    list.appendChild(item)
  }
};





// var texts = ['Ed', 'Edd', 'Eddy']

// var listNode = document.createElement('ul')

// var listItemNode

// for(var i = 0; i < list.length; i++){
//   listItemNode = document.createElement('li')

//   listItemNode.innerHTML = list[i]

//   listNode.appendChild(listItemNode)
// }