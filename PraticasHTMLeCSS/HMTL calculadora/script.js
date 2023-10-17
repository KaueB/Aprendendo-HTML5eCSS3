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
  let firstCharacter = result.innerHTML.slice(0)
  if (result.innerHTML === '' && value !== '-') {
    result.innerHTML = '';
  } else if (firstCharacter === '+' && firstCharacter === '*' && firstCharacter === '/') {
    result.innerHTML = '';
  } else if (lastCharacter !== '-' && lastCharacter !== '+' && lastCharacter !== '*' && lastCharacter !== '/') {
    result.innerHTML += value;
  } else {
    clearNumber();
    result.innerHTML += value;
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
  let getOperation = '';
  let calculateAux = '';
  if (result.innerHTML.indexOf('-') !== -1 && result.innerHTML.slice(0) === '-') {
    getOperation = '-';
    calculateAux = result.innerHTML.indexOf('-');
  } else if (result.innerHTML.indexOf('+') !== -1) {
    getOperation = '+';
    calculateAux = result.innerHTML.indexOf('+');
  } else if (result.innerHTML.indexOf('*') !== -1) {
    getOperation = '*';
    calculateAux = result.innerHTML.indexOf('*');
  } else if (result.innerHTML.indexOf('/') !== -1) {
    getOperation = '/';
    calculateAux = result.innerHTML.indexOf('/');
  }

  number01 = Number(result.innerHTML.slice(0, calculateAux));
  number02 = Number(result.innerHTML.slice(calculateAux + 1));

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

  /* console.clear()
  console.log(getOperation);
  console.log(calculateAux);
  console.log(number01);
  console.log(number02); */
}