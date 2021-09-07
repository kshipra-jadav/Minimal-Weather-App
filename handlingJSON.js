const request = new XMLHttpRequest()
const getTodo = (check) => {

  request.addEventListener('readystatechange', () => {


    if(request.readyState === 4 && request.status === 200){
      // this will convert the JSON data to JS objects that we can use.
      const data = JSON.parse(request.responseText)
      check(undefined, data)
    }
    else if(request.readyState === 4){
      check('there is some error', undefined)
    }
  })


  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()


}


getTodo((error, data) => {
  if(error){
    console.log(error)
  }
  else{
    console.log(data)
  }
})
