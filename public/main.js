function grabInputs() {
  let method = document.querySelector('#methodInput').value
  let host = document.querySelector('#hostInput').value
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
