let result = document.getElementById('result');

let number01 = 0;
let number02 = 0;

function appendToResult(value) {
  let lastCharacter = result.innerHTML.slice(-1);
  if (value != '.') {
    result.innerHTML += value;
  } else if (lastCharacter != '.' && lastCharacterIs(lastCharacter)) {
    result.innerHTML += value;
  }
}

function operation(value) {
  let lastCharacter = result.innerHTML.slice(-1);

  if (result.innerHTML === '' && value === '-') {
    result.innerHTML += value;
  } else if (result.innerHTML === '' && (value === '+' || value === '*' || value === '/')) {
    result.innerHTML += '';
    console.log('erro01');
  } else if (result.innerHTML === '-') {
    result.innerHTML += '';
    console.log('erro02');
  } else if (lastCharacterIs(lastCharacter)) {
    autoCalculate()
    result.innerHTML += value;
  } else {
    clearNumber();
    result.innerHTML += value;
  }
}

function lastCharacterIs(lastCharacter) {
  if (lastCharacter !== '-' && lastCharacter !== '+' && lastCharacter !== '*' && lastCharacter !== '/') {
    return true;
  } else {
    return false;
  }
}

function autoCalculate() {
  if ((result.innerHTML.lastIndexOf('-') !== -1 && result.innerHTML.lastIndexOf(0) !== 0) || result.innerHTML.lastIndexOf('+') !== -1 || result.innerHTML.lastIndexOf('*') !== -1 || result.innerHTML.lastIndexOf('/') !== -1) {
    calculateResult()
  }
}

function clearResult() {
  result.innerHTML = '';
  number01 = 0;
  number02 = 0;

  clearHistory();
}

function clearHistory() {
  let history = document.querySelector('div#calculatorHistory > ul#history');
  history.replaceChildren();
}

function clearNumber() {
  result.innerHTML = result.innerHTML.slice(0, -1);
}

function calculateResult() {
  let count = result.innerHTML;

  let getOperation = '';
  let countAux;

  if (result.innerHTML.lastIndexOf('-') !== -1 && result.innerHTML.lastIndexOf('-') !== 0) {
    getOperation = '-';
    countAux = result.innerHTML.lastIndexOf('-');
  } else if (result.innerHTML.lastIndexOf('+') !== -1) {
    getOperation = '+';
    countAux = result.innerHTML.lastIndexOf('+');
  } else if (result.innerHTML.lastIndexOf('*') !== -1) {
    getOperation = '*';
    countAux = result.innerHTML.lastIndexOf('*');
  } else if (result.innerHTML.lastIndexOf('/') !== -1) {
    getOperation = '/';
    countAux = result.innerHTML.lastIndexOf('/');
  }

  number01 = Number(result.innerHTML.slice(0, countAux));
  if (result.innerHTML.slice(countAux + 1) === '') {
    alert('Nao encontramos um segundo numero, entao foi considerado como "0"')
    number02 = 0
  } else {
    number02 = Number(result.innerHTML.slice(countAux + 1));
  }

  switch (getOperation) {
    case '-':
      result.innerHTML = `${(number01 - number02).toFixed(1)}`
      break;
    case '+':
      result.innerHTML = `${(number01 + number02).toFixed(1)}`
      break
    case '*':
      result.innerHTML = `${(number01 * number02).toFixed(1)}`
      break
    case '/':
      result.innerHTML = `${(number01 / number02).toFixed(1)}`
      break
    default:
      break;
  }

  history(count+' = '+result.innerHTML);

  console.clear()
  console.log(count)
  console.log('Ponteiro de onde estava o sinal: ' + countAux);
  console.log('Operacao: ' + getOperation);
  console.log('Numero 01: ' + number01);
  console.log('Numero 02: ' + number02);
}

function history(count) {
  let li = document.createElement('li');
  li.textContent = count;

  let element = document.querySelector('div.history > ul#history')
  element.appendChild(li)
} 