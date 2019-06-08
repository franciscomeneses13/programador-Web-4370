var password = prompt('Ingrese password')

while (password === '' || password === '1234') {
  password = prompt('Ingrese password valido')

  if (password === '1234') {
    password = prompt('que password boludo!')
  } else {
    password = prompt('Ingrese password valido')
  }
} 