let result = document.getElementById("result");

/* let operation = document.getElementById("operation"); */

function appendToResult(value) {
  result.value += value;
}

function operation(value) {
  result.value = value;

  console.log(result.value)
}

function clearResult() {
  result.value = "";
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = "Error";
  }
}

function clearNumber() {
  
}