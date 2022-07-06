import {collectPhotoDataObjects } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');

const pictureContainerItems = collectPhotoDataObjects();

let picturesContainerFragment = document.createDocumentFragment();

pictureContainerItems.forEach(({url, description, likes, comments}) => {
  picturesContainerFragment = pictureTemplate.cloneNode(true);
  picturesContainerFragment.querySelector('.picture__img').src = url;
  picturesContainerFragment.querySelector('.picture__img').alt = description;
  picturesContainerFragment.querySelector('.picture__comments').textContent = comments.length;
  picturesContainerFragment.querySelector('.picture__likes').textContent = likes;
  picturesContainer.appendChild(picturesContainerFragment);
});

console.log(pictureContainerItems);
