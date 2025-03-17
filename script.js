function nombre() {
    var input = document.getElementById("userInput").value;

    if (input.trim() === "") {
        document.getElementById("output").textContent = "Please enter your name!";
    } else {
        document.getElementById("output").textContent = "Hello, " + input +"! " + "Thanks for visiting my page!";
    }
}