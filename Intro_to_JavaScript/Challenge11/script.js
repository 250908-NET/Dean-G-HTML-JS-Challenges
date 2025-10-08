function addNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 + n2;

  document.getElementById("result").textContent = "Result: " + sum;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);

function subtractNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let difference = n1 - n2;

  document.getElementById("result").textContent = "Result: " + difference;
}

document.getElementById("subtractBtn").addEventListener("click", subtractNumbers);

function multiplyNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let product = n1 * n2;
  
    document.getElementById("result").textContent = "Result: " + product;
  }
  
  document.getElementById("multiplyBtn").addEventListener("click", multiplyNumbers);
  
  function divideNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    if (n2 === 0) {
      document.getElementById("result").textContent = "Error: Division by zero";
      return;
    }
    let quotient = n1 / n2;
    document.getElementById("result").textContent = "Result: " + quotient;
}

document.getElementById("divideBtn").addEventListener("click", divideNumbers);