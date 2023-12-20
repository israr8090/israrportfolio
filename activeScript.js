// Add active class to the current button (highlight it)
let header = document.getElementById("navbar");
let btns = document.getElementsByClassName("nav");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}