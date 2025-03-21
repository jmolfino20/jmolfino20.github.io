function nombre() {
    var input = document.getElementById("userInput").value;

    if (input.trim() === "") {
        document.getElementById("output").textContent = "Please enter your name!";
    } else {
        document.getElementById("output").textContent = "Hello, " + input +"! " + "Thanks for visiting my page!";
    }
}

//GET https://newsapi.org/v2/top-headlines?country=us&apiKey=5470f0728d4b4e31ad9a162ae1feb902