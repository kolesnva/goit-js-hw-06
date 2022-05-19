const allCategoriesCount = document.querySelectorAll('.item');
console.log("Number of categories:", allCategoriesCount.length);

const categoriesEl = document.querySelectorAll('.item');

categoriesEl.forEach(element => {
  const categoryName = element.firstElementChild;
  console.log("Category:", categoryName.textContent);

  const elementsList = element.lastElementChild;

  const countOfElements = elementsList.children.length;
  console.log("Elements:", countOfElements);
});


