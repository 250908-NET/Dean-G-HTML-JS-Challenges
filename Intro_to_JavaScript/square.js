function squareNumber() {
  const input = document.getElementById('numberInput');
  if (!input) return;

  const rawNumber = input.value;
  if (rawNumber === null || rawNumber.trim() === '') {
    alert('Please enter a valid number');
    return;
  }

  const n = Number(rawNumber);
  if (isNaN(n)) {
    alert('Please enter a valid number');
    return;
  }

  const squared = n * n;
  alert(rawNumber + ' squared is ' + squared);
}