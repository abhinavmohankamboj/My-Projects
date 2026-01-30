const result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  if (result.value === "") return;
  try {
    result.value = eval(result.value); // simple calculation
  } catch (error) {
    alert("Invalid Expression");
  }
}
