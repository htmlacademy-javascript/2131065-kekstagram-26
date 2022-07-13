import {pictureContainerItems } from './picture.js';
const minPictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');

const unHide = (item) => {
  item.classList.remove('hidden');
};

const toHide = (item) => {
  item.classList.add('hidden');
};

window.onkeydown = ( event ) => {
  if ( event.keyCode === 27 ) {
    toHide(bigPicture);
    document.body.classList.remove('modal-open');
  }
};

bigPictureCancel.addEventListener('click', () => {
  toHide(bigPicture);
  document.body.classList.remove('modal-open');

});

const getBigPicture = () => {
  for(let i = 0; i < minPictures.length; i++) {
    minPictures[i].addEventListener('click', () => {
      document.body.classList.add('modal-open');
      commentsList.innerHTML = '';
      unHide(bigPicture);
      toHide(bigPicture.querySelector('.social__comment-count'));
      toHide(bigPicture.querySelector('.comments-loader'));

      bigPicture.querySelector('.big-picture__img img').src = pictureContainerItems[i].url;
      bigPicture.querySelector('.likes-count').textContent = pictureContainerItems[i].likes;
      bigPicture.querySelector('.social__caption').textContent = pictureContainerItems[i].description;
      bigPicture.querySelector('.comments-count').textContent = pictureContainerItems[i].comments.length;
      for(let j = 0; j < pictureContainerItems[i].comments.length; j++) {
        commentsList.insertAdjacentHTML('beforeend',
          `<li class="social__comment">
          <img
            class="social__picture"
            src="${  pictureContainerItems[i].comments[j].avatar  }"
            alt="${  pictureContainerItems[i].comments[j].name  }"
            width="35" height="35">
            <p class="social__text">${  pictureContainerItems[i].comments[j].message  }</p>
        </li>`);
      }

    });
  }
};
export{getBigPicture};
