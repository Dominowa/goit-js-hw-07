import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ingredients = [
  {
    smallImage: "small-image-1.jpg",
    largeImage: "large-image-1.jpg",
    alt: "Image description 1",
  },
];

const ingredientsList = document.getElementById("ingredients");

function createIngredientsList() {
  const fragment = document.createDocumentFragment();

  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const image = document.createElement("img");

    listItem.classList.add("gallery__item");
    link.classList.add("gallery__link");
    image.classList.add("gallery__image");

    link.href = ingredient.largeImage;
    image.src = ingredient.smallImage;
    image.alt = ingredient.alt;
    image.dataset.source = ingredient.largeImage;

    link.appendChild(image);
    listItem.appendChild(link);
    fragment.appendChild(listItem);
  });

  ingredientsList.appendChild(fragment);
}

createIngredientsList();

ingredientsList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const source = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${source}">`);
    instance.show();
  }
});

console.log(galleryItems);
