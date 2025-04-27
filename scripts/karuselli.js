

let photoArray = [{ "name": "Joutsen", "src": "Kuvat/1.jpg" }, { "name": "Palmu", "src": "Kuvat/2.jpg" }, { "name": "Jäätelö", "src": "Kuvat/3.jpg" }];
let i = 0;
let toiminnonTunniste = 0;

function init() {

    if (localStorage.getItem("carusel-img") !== null) {
        i = parseInt(localStorage.getItem("carusel-img"));
    } else {
        i = 0;
    }
    document.getElementById("carusel-img").src = photoArray[i].src;
    document.getElementById("name").textContent = photoArray[i].name;
    /*startTimer = window.setInterval(showNext, 2000);*/
}

function showNext() {
    /*i++;*/
    i = (i + 1) % photoArray.length;
    document.getElementById("carusel-img").src = photoArray[i].src;
    document.getElementById("name").textContent = photoArray[i].name;
    localStorage.setItem("carusel-img", i);

    $('#carusel-img').fadeIn(500);
}

function previousPhoto() {
    if (i > 0) {
        i--;
        document.getElementById("carusel-img").src = photoArray[i].src;
        document.getElementById("name").textContent = photoArray[i].name;
    }
    else {
        i = photoArray.length - 1;
        document.getElementById("carusel-img").src = photoArray[i].src;
        document.getElementById("name").textContent = photoArray[i].name;
    }
    localStorage.setItem("carusel-img", i);
}

function nextPhoto() {
    if (i < photoArray.length - 1) {
        i++;
        document.getElementById("carusel-img").src = photoArray[i].src;
        document.getElementById("name").textContent = photoArray[i].name;
    }
    else {
        i = 0;
        document.getElementById("carusel-img").src = photoArray[i].src;
        document.getElementById("name").textContent = photoArray[i].name;
    }
    localStorage.setItem("carusel-img", i);
}

function change(iconID) {
    const icon = document.getElementById(iconID);
    if (icon.className === "bi bi-play") {
        icon.className = "bi bi-pause";
        toiminnonTunniste = window.setInterval(() => { nextPhoto(); }, 2000);
    } else {
        icon.className = "bi bi-play";
        window.clearInterval(toiminnonTunniste);
    }
}

$(document).ready(function () {
    $(".btn1").click(function () {
        $("#carusel-img").hide();
    });
    $(".btn2").click(function () {
        $("#carusel-img").show();
    });
});

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    button.textContent = `Click count: ${event.detail}`;
});




