import { galleryItems } from './gallery-items.js';
// Change code below this line

// 
// console.log(galleryItems)
// const list = document.querySelector('.gallery')


function createImageGallery(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {

        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')

}

const galleryElList = document.querySelector('.gallery');

galleryElList.insertAdjacentHTML('afterbegin', createImageGallery(galleryItems));

galleryElList.addEventListener('click', selectImage);

function selectImage(img) {
    img.preventDefault()
    if (!img.target.classList.contains("gallery__image")) {
        return
    }
    const instance = basicLightbox.create(`
    <img src="${img.target.dataset.source}" width="800" height="600">
`)

    instance.show()
};