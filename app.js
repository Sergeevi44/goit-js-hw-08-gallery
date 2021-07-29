const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.js-gallery');
const createItems = picturesGalleryMarkup(galleryItems);
const modalWindow = document.querySelector('.js-lightbox');
const fullPicture = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const overlay = document.querySelector('.lightbox__overlay');

galleryList.insertAdjacentHTML('beforeend', createItems);
galleryList.addEventListener('click', openModalWindow);
closeBtn.addEventListener('click', onModalClose);
overlay.addEventListener('click', onModalClose);
window.addEventListener('keydown', onKeyPress);
// window.addEventListener('keydown', changeImages);

function picturesGalleryMarkup(galleryItems) {
	return galleryItems.map(({preview, original, description}) => {
		return `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>

`;
	}).join('');
}
function openModalWindow(e) {
	e.preventDefault();
	const isGalleryImage = e.target.classList.contains('gallery__image');
	if (!isGalleryImage) {
		return;
	}
	modalWindow.classList.add('is-open');
	fullPicture.setAttribute('src', e.target.dataset.source);
	fullPicture.setAttribute('alt', e.target.alt);
}
function onModalClose() {
	fullPicture.removeAttribute('src');
	modalWindow.classList.remove('is-open');
}
function onKeyPress(e) {
	const isKeyCodeEsc = e.code==='Escape';
	if (!isKeyCodeEsc) {
		return;
	}
	fullPicture.removeAttribute('src');
	modalWindow.classList.remove('is-open');
}
// function changeImages(e) {
// 	const isModalOpen = modalWindow.classList.contains('is-open');
// 	if (!isModalOpen) {
// 		return;
// 	}
// 	galleryItems.forEach(item => {
// 		const isMatch = item.original === fullPicture.src;
// 		console.log(galleryItems.indexOf(item)+1);
// 		if(isMatch){
// 			fullPicture.src = (galleryItems.indexOf(item)+1).original;
// 		};
// 	})
// }
