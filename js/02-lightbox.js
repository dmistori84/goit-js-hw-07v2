import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

function getMarkUp(arr) { 
  return arr
  .map(({ preview, original, description }) => {
    
    return `
  <div class="gallery__item">
    <a  class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview} 
        data-source="${original}"
        alt=${description}
      >
    </a>
  </div>
    `
  }).join('');
};

const markUp = getMarkUp(galleryItems);
galleryBox.insertAdjacentHTML('beforeend', markUp);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionClass: "",
});