let isDarkMode = false

document.getElementById("modeSwitch").addEventListener("click", function () {
    if (isDarkMode) {
        document.body.style.backgroundColor = "#FFFFFF";

    } else {
        document.body.style.backgroundColor = "#202124"; 
    }
    isDarkMode = !isDarkMode; 
});