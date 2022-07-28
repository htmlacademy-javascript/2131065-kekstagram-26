import './upload-form.js';

const scaleUpButton = document.querySelector('.scale__control--bigger');
const scaleDownButton = document.querySelector('.scale__control--smaller');
const picture = document.querySelector('.img-upload__preview img');
let scaleSize = 0.5;

const scalingUpImage = () => {
  if(scaleSize < 1){
    picture.setAttribute('style', `transform: scale(${scaleSize})`);
    scaleSize += 0.25;
    document.querySelector('.scale__control--value').value = `${scaleSize * 100  }%`;
    console.log('UP');
  }
};
const scalingDownImage = () => {
  if(scaleSize >= 0.25 && scaleSize <= 1){
    scaleSize -= 0.25;
    picture.setAttribute('style', `transform: scale(${scaleSize})`);
    document.querySelector('.scale__control--value').value = `${scaleSize * 100  }%`;
    console.log('DOWN');
  }
};

scaleUpButton.addEventListener('click', scalingUpImage,);
scaleDownButton.addEventListener('click', scalingDownImage,);
