let roomsImg = document.querySelectorAll(".rooms .image img"),
    rightArrow = document.querySelector(".rooms .right"),
    leftArrow = document.querySelector(".rooms .left"),
    imgsArray = ["kempiniski_slider_1.png", "kempiniski_carousel_2.png",  "kempiniski_carousel_1.png"],
    root = "img/",
    dots = document.querySelectorAll(".rooms .image .dots>a"),
    counter = 1;



rightArrow.addEventListener("click", (e) => {
    e.preventDefault();
    for (let index = 0; index < roomsImg.length; index++) {
        if(counter === imgsArray.length) {
            counter = 0;
        }
        roomsImg[index].setAttribute("src", root + imgsArray[counter]);
        for (let index = 0; index < dots.length; index++) {
            const element = dots[index];
            element.classList.remove("active");
        }
        dots[counter].classList.add("active");
        counter++
    }
})

leftArrow.addEventListener("click", (e) => {
    e.preventDefault();
    for (let index = 0; index < roomsImg.length; index++) {
        if(counter === 0) {
            counter = imgsArray - 1;
        }
        roomsImg[index].setAttribute("src", root + imgsArray[counter]);
        counter--;
    }
})

////////////////////////////////////////////////////////////////////////////

let popupBtn = document.querySelector(".send"),
    closeModal = document.querySelector(".modal .close"),
    escModal = document.querySelector(".modal .esc"),
    modal = document.querySelector(".modal");



popupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.showModal();
})

closeModal.addEventListener("click", () => {
    modal.close();
})

escModal.addEventListener("click", () => {
    modal.close();
})

//////////////////////////////////////////////////////////////////////////////

let categoriesList = document.querySelectorAll(".modal .content .rating .hotel_categories ul li a");

categoriesList.forEach((list) => {
    list.addEventListener("click", (e) => {
        e.preventDefault();
        for (let index = 0; index < categoriesList.length; index++) {
            const category = categoriesList[index];
            category.classList.remove("active");
        }
        list.classList.add("active");
    })
})