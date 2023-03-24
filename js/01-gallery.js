import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const showGallery = galleryItems
  .map(
    (
      galleryItems
    ) => `<div><a class="gallery__link" href="${galleryItems.original}">
   <img class="gallery__image" src="${galleryItems.preview}" data-source="${galleryItems.original}" alt="${galleryItems.description}"/>
    </a></div>`
  )
  .join("");
gallery.innerHTML = showGallery;

gallery.addEventListener("click", showFullImg);
function showFullImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="700" height="500">
`);
  instance.show();
}

