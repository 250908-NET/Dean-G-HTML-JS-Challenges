function changeHeading() {
  const headingToChange = document.getElementById('title');
  if (!headingToChange) return false;
  headingToChange.textContent = "You clicked the button!";
  return true;
}

// expose convenience helper
window.changeHeading = changeHeading;