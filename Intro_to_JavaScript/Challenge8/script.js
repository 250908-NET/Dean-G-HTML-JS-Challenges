function sayHello() {
  alert("Hello from the external file!");
}

// Connect the function to the button
let helloBtn = document.getElementById("helloBtn");
helloBtn.addEventListener("click", sayHello);

function sayGoodbye() {
  alert("Peace out!");
}

let goodByeBtn = document.getElementById("goodByeBtn");
goodByeBtn.addEventListener("click", sayGoodbye);
