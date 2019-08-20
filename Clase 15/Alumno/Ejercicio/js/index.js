$(document).ready(function () {
  function getData(url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }


  getData('https://swapi.co/api/people/1', handleRequest)

  function getPersonById(id, cb) {
    getData(`https://swapi.co/api/people/${id}`, cb)
  }

  getPersonById(10, handleRequest)


  function handleRequest(error, data) {
    if (!error) {
      console.log('request ok')
      console.log(data)
    } else {
      console.error('fallo el request', error)
    }
  }
})