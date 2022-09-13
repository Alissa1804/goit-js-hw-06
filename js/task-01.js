const categoriesItems = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesItems.length);
categoriesItems.forEach(function (item) {
  console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`);
});
