

function grabInputs() {
  let method = document.querySelector('#methodInput').value
  let host = document.querySelector('#hostInput').value
  // let requestBody = (method, host) => {
  //     method = method
  //     host = host
  //     return [method, host]
  //    }
  // return JSON.stringify(requestBody(method, host))
  //
  // let inputs = {method, host}
  // return inputs
  // GET /search?q=hedgehog HTTP/1.1
  // Host: www.google.com
  // User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36
  // Accept: text/html

  // fetch('host').then(function(name){
  //   return res.hostname = name
  // })
  // method.value =
  //     host.value =

  let inputs = [method + ' /' + '\n' + 'HOST: ' + host + '\n']
  return inputs
}

grabInputs()

document.getElementByClass('.reqBody').value =

function buildRequest() {
  // let sentRequest = document.getElementByClass('.buildRequest')
  let receive = document.querySelector('.reqBody')
  // console.log(theRequest)
  return receive.value = grabInputs();//server info
}


function buildSend() {
  let response = document.querySelector('.resBody')
  //return receive.value = response
  return response.value = res.body
}
