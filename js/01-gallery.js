import { galleryItems } from "./gallery-items.js";
[
  {
    smallImage: "small-image-1.jpg",
    largeImage: "large-image-1.jpg",
    alt: "Image description 1",
  },
];

const ingredientsList = document.getElementById("ingredients");

function createGalleryItem(item) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");

  listItem.classList.add("gallery__item");
  link.classList.add("gallery__link");
  image.classList.add("gallery__image");

  link.href = item.largeImage;
  image.src = item.smallImage;
  image.alt = item.alt;
  image.dataset.source = item.largeImage;

  link.appendChild(image);
  listItem.appendChild(link);
  return listItem;
}

function openModal(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const source = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${source}">`);
    instance.show();
  }
}

ingredientsList.addEventListener("click", openModal);

document.addEventListener("keydown", (event) => {
  const instance = basicLightbox.instance();
  if (event.key === "Escape" && instance.visible()) {
    instance.close();
  }
});

const galleryFragment = document.createDocumentFragment();
galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryFragment.appendChild(galleryItem);
});

ingredientsList.appendChild(galleryFragment);
