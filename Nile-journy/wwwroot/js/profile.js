let profileContent = document.querySelector(".profile .content"),
    logoutBtn = document.querySelector(".log_out");


logoutBtn.onclick = function () {
    profileContent.innerHTML += `<div class="log_out_screen">
        <h2>Logout</h2>
        <p>After logging out from your account you will still be able top access</p>
        <div class="buttons">
            <a href="#"><button class="cancel">Cancel</button></a>
            <a href="home.html"><button class="logout">Logout</button></a>
        </div>
    </div>`
}


let reviewsOff = document.querySelector(".profile .reviews .toggles .off"),
    reviewsOn = document.querySelector(".profile .reviews .toggles .on"),
    passShowNew = document.querySelector(".profile .change_pass .new_pass .open"),
    passShowConf = document.querySelector(".profile .change_pass .conf_pass .open"),
    passHideNew = document.querySelector(".profile .change_pass .new_pass .closed"),
    passHideConf = document.querySelector(".profile .change_pass .conf_pass .closed"),
    newPassInput = document.querySelector(".profile .change_pass .new_pass input"),
    confPassInput = document.querySelector(".profile .change_pass .conf_pass input");


if (reviewsOn) {
    reviewsOn.addEventListener("click", () => {
        reviewsOn.style.display = "none";
        reviewsOff.style.display = "block";
    });
}


if (reviewsOff) {
    reviewsOff.addEventListener("click", () => {
        reviewsOff.style.display = "none";
        reviewsOn.style.display = "block";
    });
}

if (passHideNew) {
    passHideNew.addEventListener("click", () => {
        if (newPassInput.getAttribute("type") == "password") {
            newPassInput.setAttribute("type", "text");
            passShowNew.style.display = "block";
            passHideNew.style.display = "none";
        }
    });
}


if (passShowNew) {
    passShowNew.addEventListener("click", () => {
        if (newPassInput.getAttribute("type") == "text") {
            newPassInput.setAttribute("type", "password");
            passShowNew.style.display = "none";
            passHideNew.style.display = "block";
        }
    });
}


if (passHideConf) {
    passHideConf.addEventListener("click", () => {
        if (confPassInput.getAttribute("type") == "password") {
            confPassInput.setAttribute("type", "text");
            passShowConf.style.display = "block";
            passHideConf.style.display = "none";
        }
    });
}


if (passShowConf) {
    passShowConf.addEventListener("click", () => {
        if (confPassInput.getAttribute("type") == "text") {
            confPassInput.setAttribute("type", "password");
            passShowConf.style.display = "none";
            passHideConf.style.display = "block";
        }
    });
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