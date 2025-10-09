function addItem() {
    const ul = document.getElementById("list");
    const input = document.getElementById("newItemText");
    if (!ul || !input) {
        console.error('Missing #list or #newItemText element');
        return;
    }
    const newItemText = input.value;
    if (newItemText.trim() === "") {
        alert("Please enter some text for the new item.");
        return;
    }
    const li = document.createElement("li");
    li.textContent = newItemText;
    // Clear the input field
    input.value = "";
    ul.appendChild(li);
}