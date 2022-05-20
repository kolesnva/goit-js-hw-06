const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newIngredientEl = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = `${ingredient}`;
  ingredientsItem.classList.add('item');

  return ingredientsItem;
})

const ingredientList = document.querySelector('#ingredients');
ingredientList.append(...newIngredientEl);
console.log(ingredientList);
