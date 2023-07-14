let nav = document.querySelector(".nav_container");


window.onscroll = function () { showOverlay() };

function showOverlay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

////////////////////////////////////////////////////////

let landing = document.querySelector(".landing_page .content"),
    logoutBtn = document.querySelector(".log_out");


if (logoutBtn) {
    logoutBtn.onclick = function () {
        landing.innerHTML += `<div class="log_out_screen">
            <h2>Logout</h2>
            <p>After logging out from your account you will still be able top access</p>
            <div class="buttons">
                <a href="reviews.html"><button class="cancel">Cancel</button></a>
                <a href="home.html"><button class="logout">Logout</button></a>
            </div>
        </div>`
    }
}

/////////////////////////////////////////////////////////////////////////////

let popupBtn = document.querySelector(".send"),
    closeModal = document.querySelector(".modal .close"),
    inputField = document.querySelector(".landing_page .content .container form input"),
    escModal = document.querySelector(".modal .esc"),
    modal = document.querySelector(".modal");



popupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!inputField.value.length == 0) {
        modal.showModal();
    }
    else {
        alert("please select a place");
    }
})

closeModal.addEventListener("click", () => {
    modal.close();
})

escModal.addEventListener("click", () => {
    modal.close();
})

//////////////////////////////////////////////////////////////////////////////

let categoriesList = document.querySelectorAll(".modal .content .rating .categories ul li a");

categoriesList.forEach((list) => {
    list.addEventListener("click", () => {
        for (let index = 0; index < categoriesList.length; index++) {
            const category = categoriesList[index];
            category.classList.remove("active");
        }
        list.classList.add("active");
    })
})