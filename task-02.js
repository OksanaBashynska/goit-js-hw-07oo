const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListEl = document.querySelector('ul');

const elements = ingredients.map(ingredient => {
    const ingredientsItemEl = document.createElement('li');
    ingredientsItemEl.textContent = ingredient;
    return ingredientsItemEl;
})


ingredientsListEl.append(...elements);