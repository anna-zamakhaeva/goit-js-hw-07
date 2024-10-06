const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const title = category.querySelector("h2");
    const catName = title.textContent;
    const elements = category.querySelectorAll(".item-list li");

    console.log(`Category name: ${catName}`);
    console.log(`Elements: ${elements.length}`);
})

