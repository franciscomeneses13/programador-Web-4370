function includesText(textoAEncontrar, textoTotal) {
  console.log(typeof textoAEncontrar)
  var param1IsString = typeof textoAEncontrar === 'string'
  var param2IsString = typeof textoTotal === 'string'
  if (!param1IsString || !param2IsString) {
    return false
  }
  var tae = textoAEncontrar.toLowerCase();
  var tT = textoTotal.toLowerCase();
  var isInTextoTotal = tT.indexOf(tae);
  if (isInTextoTotal > -1) {
    return true
  }
  return false
}

console.log(includesText('Pa', 'Patricia'))

console.log(includesText('Patricia', 'Pa'))

console.log(includesText(2, 'Pa'))