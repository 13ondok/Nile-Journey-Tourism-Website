let nav = document.querySelector(".nav_container");


window.onscroll = function () { showOverlay() };

function showOverlay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

/////////////////////////////////////////////////////////

let itemClicker = document.querySelectorAll(".transportation .transport .cont > div"),
    transportationContent = document.querySelectorAll(".transportation .transport .content > div");



itemClicker.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        for (let index = 0; index < itemClicker.length; index++) {
            const element = itemClicker[index];
            element.classList.remove("active");
        }
        for (let index = 0; index < transportationContent.length; index++) {
            const content = transportationContent[index];  
            content.classList.remove("active");
            if(item.getAttribute("data-count") == 1) {
                transportationContent[0].classList.add("active");
            }
            else if(item.getAttribute("data-count") == 2) {
                transportationContent[1].classList.add("active");
            }
            if(item.getAttribute("data-count") == 3) {
                transportationContent[2].classList.add("active");
            }
        }
        item.classList.add("active");
    })
})