var numberResult = document.getElementById('result').innHTML;

let number01 = 0;
let number02 = 0;

function appendToResult(value) {
  document.getElementById('result').innerHTML = numberResult + value;

  number01 = Number(number01 + value)
  console.log(number01)
};

function operation(value) {

  document.getElementById('result').innerHTML += value
  
  
  let lastCharacter = numberResult.value.slice(-1)
  if (lastCharacter == '-' || '+' || '*' || '/') {
    document.getElementById('result').innerHTML += ''
  } else {
    document.getElementById('result').innerHTML += value
  };
};

function clearResult() {
  document.getElementById('result').innerHTML = ''
  number01 = 0
  number02 = 0
};

function clearNumber() {

};