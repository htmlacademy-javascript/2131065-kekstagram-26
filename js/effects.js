const scaleUpButton = document.querySelector('.scale__control--bigger');
const scaleDownButton = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const picture = document.querySelector('.img-upload__preview img');
let scaleSize = 1;

const effectSlider = document.querySelector('.img-upload__effect-level');
effectSlider.setAttribute('style', 'display: none');

const effectButtons = document.querySelectorAll('.effects__radio');

effectButtons.forEach((isChecked) => {
  isChecked.addEventListener('click', (elem) => {
    picture.removeAttribute('class');
    picture.classList.add(`effects__preview--${elem.target.value}`);
  });
});

picture.setAttribute('style', `transform: scale(${scaleSize})`);
scaleValue.value = `${scaleSize * 100}%`;

const scalingUpImage = () => {
  if (scaleSize < 1) {
    scaleSize += 0.25;
    picture.setAttribute('style', `transform: scale(${scaleSize})`);
    scaleValue.value = `${scaleSize * 100}%`;
  }
};
const scalingDownImage = () => {
  if (scaleSize > 0.25 && scaleSize <= 1) {
    scaleSize -= 0.25;
    picture.setAttribute('style', `transform: scale(${scaleSize})`);
    scaleValue.value = `${scaleSize * 100}%`;
  }
};

scaleUpButton.addEventListener('click', scalingUpImage,);
scaleDownButton.addEventListener('click', scalingDownImage,);


