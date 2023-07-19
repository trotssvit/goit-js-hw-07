import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createImageGallery(galleryIt) {

    return galleryIt.map(({ preview, original, description }) => {

        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('')

};

const galleryElList = document.querySelector('.gallery');

galleryElList.insertAdjacentHTML('afterbegin', createImageGallery(galleryItems));
let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
gallery.on('show.simplelightbox', function() {});