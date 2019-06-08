var password = prompt('Ingrese password')

while (password === '' || password === '1234') {
  password = prompt('Ingrese password valido')

  if (password === '1234') {
    password = prompt('Ingrese password valido')
  } else {
    password = prompt('Ingrese password valido')
  }
} 