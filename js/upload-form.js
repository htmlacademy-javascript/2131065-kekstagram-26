import { unHide, toHide } from './big-picture.js';

const uploadFileInput = document.querySelector('#upload-file');
const uploadImgOverlay = document.querySelector('.img-upload__overlay');
const uploadImgCancel = document.querySelector('.img-upload__cancel');
const uploadedImgComment = document.querySelector('.text__description');
const uploadedImgHashtag = document.querySelector('.text__hashtags');


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

uploadedImgComment.onblur = () => {
  window.onkeydown = (event) => {
    if (event.keyCode === 27) {
      toHide(uploadImgOverlay);
      //console.log('blur');
      document.body.classList.remove('modal-open');
      uploadFileInput.value = '';
      document.querySelector('.img-upload__preview img').src = '';
    }
  };
};

uploadedImgComment.onfocus = () => {
  //console.log('FOCUSE');
  window.onkeydown = (event) => {
    event.stopPropagation();
  };
};

uploadImgCancel.addEventListener('click', () => {
  toHide(uploadImgOverlay);
  document.body.classList.remove('modal-open');
  uploadFileInput.value = '';
  document.querySelector('.img-upload__preview img').src = '';
});
