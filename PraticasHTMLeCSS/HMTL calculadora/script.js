let result = document.getElementById('result');

let number01 = 0;
let number02 = 0;

function appendToResult(value) {
  let lastCharacter = result.innerHTML.slice(-1);
  if (value != '.') {
    result.innerHTML += value;
  } else if (lastCharacter != '.' && lastCharacter != '') {
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
  } else if (lastCharacter !== '-' && lastCharacter !== '+' && lastCharacter !== '*' && lastCharacter !== '/') {
    autoCalculate()
    result.innerHTML += value;
  } else {
    clearNumber();
    result.innerHTML += value;
  }
}

function autoCalculate(value) {
  if ((result.innerHTML.lastIndexOf('-') !== -1 && result.innerHTML.lastIndexOf(0) !== 0) || result.innerHTML.lastIndexOf('+') !== -1 || result.innerHTML.lastIndexOf('*') !== -1 || result.innerHTML.lastIndexOf('/') !== -1) {
    calculateResult()
  }
}

function clearResult() {
  result.innerHTML = '';
  number01 = 0;
  number02 = 0;
}

function clearNumber() {
  result.innerHTML = result.innerHTML.slice(0, -1);
}

function calculateResult() {
  let count = result.innerHTML;

  let getOperation = '';
  let calculateAux;

  if (result.innerHTML.lastIndexOf('-') !== -1 && result.innerHTML.lastIndexOf('-') !== 0) {
    getOperation = '-';
    calculateAux = result.innerHTML.lastIndexOf('-');
  } else if (result.innerHTML.lastIndexOf('+') !== -1) {
    getOperation = '+';
    calculateAux = result.innerHTML.lastIndexOf('+');
  } else if (result.innerHTML.lastIndexOf('*') !== -1) {
    getOperation = '*';
    calculateAux = result.innerHTML.lastIndexOf('*');
  } else if (result.innerHTML.lastIndexOf('/') !== -1) {
    getOperation = '/';
    calculateAux = result.innerHTML.lastIndexOf('/');
  }

  number01 = Number(result.innerHTML.slice(0, calculateAux));
  if (result.innerHTML.slice(calculateAux + 1) === '') {
    alert('O segundo numero foi considerado como "0"')
  } else {
    number02 = Number(result.innerHTML.slice(calculateAux + 1));
  }

  switch (getOperation) {
    case '-':
      result.innerHTML = `${number01 - number02}`
      break;
    case '+':
      result.innerHTML = `${number01 + number02}`
      break
    case '*':
      result.innerHTML = `${number01 * number02}`
      break
    case '/':
      result.innerHTML = `${number01 / number02}`
      break
    default:
      break;
  }

  console.clear()
  console.log(count)
  console.log('Ponteiro de onde estava o sinal: ' + calculateAux);
  console.log('Operacao: ' + getOperation);
  console.log('Numero 01: ' + number01);
  console.log('Numero 02: ' + number02);
} 