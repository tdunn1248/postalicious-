function grabInputs() {
  let queryParameters = {
    'keyP1': document.querySelector('#qpKey1').value,
    'valueP1':document.querySelector('#qpValue1').value,
    'keyP2': document.querySelector('#qpKey2').value,
    'valueP2': document.querySelector('#qpValue2').value,
    'keyP3': document.querySelector('#qpKey3').value,
    'valueP3': document.querySelector('#qpKey3').value
  }
  let headers = {
    'keyH1': document.querySelector('#headKey1').value,
    'valueH1': document.querySelector('#headValue1').value,
    'keyH2': document.querySelector('#headKey2').value,
    'valueH2': document.querySelector('#headValue2').value,
    'keyH3': document.querySelector('#headKey3').value,
    'valueH3': document.querySelector('#headValue3').value
  }
  let inputs = {
    'Method': document.querySelector('#methodInput').value,
    'Host': document.querySelector('#hostInput').value,
    'Query Parameters': queryParameters,
    'Headers': headers,
    'Body' : document.querySelector('.bodyBox').value
  }
  let format = {
    'Method': inputs.Method,
    'Host': inputs.Host
  }
  return JSON.stringify(format)
}

function buildRequest() {
  let receive = document.querySelector('.reqBody')
    return receive.value = grabInputs();
}

function build() {
  const inputtedUrl = grabInputs()
  var myInit = { method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: 'http://www.google.com' };
  fetch('/request/build', myInit)
  .then(function(response) {
  }).then(function(data) {
  // put returned data in the .response-header section
  });
}
