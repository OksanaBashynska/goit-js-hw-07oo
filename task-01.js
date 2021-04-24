const categoriesListEl = document.querySelector('ul');
const countAllChildren = element => console.log(`В списке ${element.children.length} категории.`);
countAllChildren(categoriesListEl);

const categoriesItemsEl = document.querySelectorAll('.item');
function findItemNameAndCountItsChildren(elements) {
    elements.forEach(element => {
        console.log(`Категория: ${element.firstElementChild.textContent}`);
        console.log(`Количество элементов: ${element.lastElementChild.children.length}`);
    });
};
findItemNameAndCountItsChildren(categoriesItemsEl);