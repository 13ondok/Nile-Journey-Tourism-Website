let categoriesItems = document.querySelectorAll(".favorite_categories .categories .category"),
    categoriesContent = document.querySelectorAll(".favorite_categories .items .cards");



categoriesItems.forEach((item) => {
    item.addEventListener("click", () => {
        for (let index = 0; index < categoriesItems.length; index++) {
            const element = categoriesItems[index];
            element.classList.remove("active");
        }
        for (let index = 0; index < categoriesContent.length; index++) {
            const category = categoriesContent[index];
            category.classList.remove("active");
            if(item.getAttribute("data-count") === category.getAttribute("data-count")) {
                category.classList.add("active");
            }
        }
        item.classList.add("active");
    })
})