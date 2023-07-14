let listItems = document.querySelectorAll(".carousel ul li"),
    aboutSection = document.querySelector(".about"),
    leftArrow = document.querySelector(".about .left_arrow"),
    rightArrow = document.querySelector(".about .right_arrow"),
    imgsArray = ["./img/about_img1.jpg", "./img/about_img2.PNG", "./img/about_img3.jpeg"],
    counter = 0,
    infoShow = document.querySelectorAll(".carousel .container div");


rightArrow.addEventListener("click", () => {
    counter++
    for (let index = 0; index < imgsArray.length; index++) {
        const img = imgsArray[index];
        if (counter == imgsArray.length) {
            counter = 0;
        }
        aboutSection.style.backgroundImage = `url(${imgsArray[counter]})`;
        aboutSection.style.backgroundRepeat = "no-repeat";
        aboutSection.style.backgroundSize = "cover";
    }
    for (let index = 0; index < infoShow.length; index++) {
        const text = infoShow[index];
        for (let index = 0; index < listItems.length; index++) {
            const itemMain = listItems[index];
            for (let index = 0; index < listItems.length; index++) {
                const item = listItems[index];
                item.classList.remove("active");
                listItems[counter].classList.add("active");
            }
            text.classList.remove("show");
            if (itemMain.classList.contains("active")) {
                if (itemMain.getAttribute("data-count") == 1) {
                    infoShow[0].classList.add("show");
                }
                else if (itemMain.getAttribute("data-count") == 2) {
                    infoShow[1].classList.add("show");
                }
                else if (itemMain.getAttribute("data-count") == 3) {
                    infoShow[2].classList.add("show");
                }
            }
        }
    }
})

leftArrow.addEventListener("click", () => {
    counter--
    for (let index = 0; index < imgsArray.length; index++) {
        const img = imgsArray[index];
        if (counter == -1) {
            counter = imgsArray.length - 1;
        }
        aboutSection.style.backgroundImage = `url(${imgsArray[counter]})`;
        aboutSection.style.backgroundRepeat = "no-repeat";
        aboutSection.style.backgroundSize = "cover";
        for (let index = 0; index < infoShow.length; index++) {
            const text = infoShow[index];
            for (let index = 0; index < listItems.length; index++) {
                const itemMain = listItems[index];
                for (let index = 0; index < listItems.length; index++) {
                    const item = listItems[index];
                    item.classList.remove("active");
                    listItems[counter].classList.add("active");
                }
                text.classList.remove("show");
                if (itemMain.classList.contains("active")) {
                    if (itemMain.getAttribute("data-count") == 1) {
                        infoShow[0].classList.add("show");
                    }
                    else if (itemMain.getAttribute("data-count") == 2) {
                        infoShow[1].classList.add("show");
                    }
                    else if (itemMain.getAttribute("data-count") == 3) {
                        infoShow[2].classList.add("show");
                    }
                }
            }
        }
    }
})

for (let index = 0; index < infoShow.length; index++) {
    const info = infoShow[index];
    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i];
        item.addEventListener("click", () => {
            for (let index = 0; index < listItems.length; index++) {
                const element = listItems[index];
                element.classList.remove("active");
                info.classList.remove("show");
            }
            item.classList.add("active");
            if (item.getAttribute("data-count") == 1) {
                aboutSection.style.backgroundImage = `url(${imgsArray[0]})`;
                aboutSection.style.backgroundRepeat = "no-repeat";
                aboutSection.style.backgroundSize = "cover";
            }
            else if (item.getAttribute("data-count") == 2) {
                aboutSection.style.backgroundImage = `url(${imgsArray[1]})`;
                aboutSection.style.backgroundRepeat = "no-repeat";
                aboutSection.style.backgroundSize = "cover";
            }
            else if (item.getAttribute("data-count") == 3) {
                aboutSection.style.backgroundImage = `url(${imgsArray[2]})`;
                aboutSection.style.backgroundRepeat = "no-repeat";
                aboutSection.style.backgroundSize = "cover";
            }
            if (item.getAttribute("data-count") === info.getAttribute("data-count")) {
                info.classList.add("show");
            }
        })
    }
}

////////////////////////////////////////////////////////////////////////////////////////

let aboutContent = document.querySelector(".about .content"),
    logoutBtn = document.querySelector(".log_out");


if (logoutBtn) {
    logoutBtn.onclick = function () {
        aboutContent.innerHTML += `<div class="log_out_screen">
            <h2>Logout</h2>
            <p>After logging out from your account you will still be able top access</p>
            <div class="buttons">
                <a href="about.html"><button class="cancel">Cancel</button></a>
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


