let filterBtn = document.querySelector(".filter button"),
    filterList = document.querySelector(".filter ul");


filterBtn.addEventListener("click", () => {
    filterList.classList.toggle("active");
})