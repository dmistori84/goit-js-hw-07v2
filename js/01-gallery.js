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

galleryBox.addEventListener('click', onOpenModal);

function onOpenModal(e) { 
  e.preventDefault();
  
  if (!e.target.classList.contains('gallery__image')) { 
    return;
  };
  const basicModal = basicLightbox
    .create(`<div><img src="${e.target.dataset.source}" width ="800" height = "600"></div>`);
  
  basicModal.show();
  window.addEventListener('keydown', closeBasicModal);
  
  function closeBasicModal(e) { 
  if (e.code === 'Escape') {
    basicModal.close();
  };
  }
};






 


