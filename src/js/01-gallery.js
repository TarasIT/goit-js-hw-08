import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('div.gallery');

const imagesGrid = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}><img class= "gallery__image" src=${preview} alt="${description}" width = 340></a>`;
  })
  .join('');
galleryList.innerHTML = imagesGrid;

let lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
