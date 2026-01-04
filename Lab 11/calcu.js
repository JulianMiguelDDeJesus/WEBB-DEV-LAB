const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

document.getElementById("add").addEventListener("click", () => {
  calculate("+");
});

document.getElementById("subtract").addEventListener("click", () => {
  calculate("-");
});

document.getElementById("multiply").addEventListener("click", () => {
  calculate("*");
});

document.getElementById("divide").addEventListener("click", () => {
  calculate("/");
});

function calculate(operator) {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);

  if (isNaN(a) || isNaN(b)) {
    result.textContent = "Result: Please enter numbers";
    return;
  }

  let answer;

  switch (operator) {
    case "+":
      answer = a + b;
      break;
    case "-":
      answer = a - b;
      break;
    case "*":
      answer = a * b;
      break;
    case "/":
      answer = b !== 0 ? a / b : "Cannot divide by zero";
      break;
  }

  result.textContent = "Result: " + answer;
}
