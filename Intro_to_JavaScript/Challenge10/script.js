function greetUser() {
  let name = document.getElementById("nameInput").value;
  let color = document.getElementById("colorInput").value;
  if (name.trim() === "" || color.trim() === "") {
    alert("Please fill out the fields!");
  } else {
    alert("Hello, " + name + ", your fav color is " + color + "!");
  }
}
document.getElementById("greetBtn").addEventListener("click", greetUser);


