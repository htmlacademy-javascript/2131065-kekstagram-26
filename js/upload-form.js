import { unHide, toHide } from './big-picture.js';
import { sendData } from './api.js';

const uploadFileInput = document.querySelector('#upload-file');
const uploadImgOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const cancelUploadImg = document.querySelector('.img-upload__cancel');
const uploadedImgComment = document.querySelector('.text__description');
const uploadedImgHashtag = document.querySelector('.text__hashtags');

function showSuccessMessage() {
  const successUploadMessage = document.querySelector('#success').content;
  const successUploadMessageBtn = document.querySelector('.success__button');
  document.body.appendChild(successUploadMessage);
}

const closeUploadForm = () => {
  toHide(uploadImgOverlay);
  document.body.classList.remove('modal-open');
  uploadFileInput.value = '';
  document.querySelector('.img-upload__preview img').src = '';
  document.querySelector('.img-upload__preview img').removeAttribute('class');
};

uploadForm.onsubmit = (evt) => {
  evt.preventDefault();
  if (uploadedImgHashtag.value !== '') {
    const formData = new FormData(evt.target);
    sendData(formData);
    closeUploadForm();
    showSuccessMessage();
  } else {
    console.log('Форма невалидна');
  }
};

uploadFileInput.addEventListener('change', function () {
  if (this.value) {
    unHide(uploadImgOverlay);
    document.body.classList.add('modal-open');
    uploadedImgComment.focus();
    uploadedImgHashtag.focus();
    const [file] = uploadFileInput.files;
    if (file) {
      document.querySelector('.img-upload__preview img').src = URL.createObjectURL(file);
    }
  }
});


window.onkeydown = (evt) => {
  if (evt.keyCode === 27) {
    toHide(uploadImgOverlay);
    toHide(document.querySelector('.big-picture'));
    document.body.classList.remove('modal-open');
    uploadFileInput.value = '';
    document.querySelector('.img-upload__preview img').src = '';
    document.querySelector('.img-upload__preview img').removeAttribute('class');
  }
};


uploadedImgComment.onfocus = () => {
  uploadedImgComment.onkeydown = (evt) => {
    evt.stopPropagation();
  };
};

cancelUploadImg.addEventListener('click', () => {
  closeUploadForm();
});
