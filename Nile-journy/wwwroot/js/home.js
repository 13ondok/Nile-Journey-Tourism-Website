let prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next"),
    imgs = document.querySelectorAll(".slider img"),
    imageLink = ["discover_img_1.jpg", "discover_img_2.jpg", "discover_img_3.jpg", "discover_img_4.jpg", "discover_img_5.jpg"],
    root = "img/",
    counter = 1;


nextBtn.onclick = function () {
    for (let index = 0; index < imgs.length; index++) {
        if (counter === imageLink.length) {
            counter = 1;
        }
        imgs[index].setAttribute("src", root + imageLink[counter]);
        counter++;
    }
}



prevBtn.onclick = function () {
    for (let index = 0; index < imgs.length; index++) {
        if (counter === 0) {
            counter = imageLink.length - 1;
        }
        imgs[index].setAttribute("src", root + imageLink[counter]);
        counter--;
    }
}

//////////////////////////////////////////////////////////////////////////////////

let landing = document.querySelector(".landing_page .content"),
    logoutBtn = document.querySelector(".log_out");


if (logoutBtn) {
    logoutBtn.onclick = function () {
        landing.innerHTML += `<div class="log_out_screen">
            <h2>Logout</h2>
            <p>After logging out from your account you will still be able top access</p>
            <div class="buttons">
                <a href="home_succes.html"><button class="cancel">Cancel</button></a>
                <a href="home.html"><button class="logout">Logout</button></a>
            </div>
        </div>`
    }
}


//////////////////////////////////////////////////////////////////////////////////////

let nav = document.querySelector(".nav_container");


window.onscroll = function () { showOverlay() };

function showOverlay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

////////////////////////////////////////////////////////////////////////////////////////

let alexImg = document.querySelector(".discover .slider .one img"),
    aswanImg = document.querySelector(".discover .slider .two img"),
    cairoImg = document.querySelector(".discover .slider .three img"),
    luxorImg = document.querySelector(".discover .slider .four img"),
    siwaImg = document.querySelector(".discover .slider .five img");


cairoImg.addEventListener("click", () => {
    window.location.href = "cairo.html";
})

alexImg.addEventListener("click", () => {
    window.location.href = "alexandria.html";
})

aswanImg.addEventListener("click", () => {
    window.location.href = "aswan.html";
})

luxorImg.addEventListener("click", () => {
    window.location.href = "luxor.html";
})

siwaImg.addEventListener("click", () => {
    window.location.href = "siwa.html";
})