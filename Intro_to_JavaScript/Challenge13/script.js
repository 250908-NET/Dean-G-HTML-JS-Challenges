function makeRed() {
  const headingToChange = document.getElementById('paragraph');
  if (!headingToChange) return false;
  headingToChange.style.color = "red";
  return true;
}

function makeBlack() {
  const headingToChange = document.getElementById('paragraph');
  if (!headingToChange) return false;
  headingToChange.style.color = "black";
  return true;
}