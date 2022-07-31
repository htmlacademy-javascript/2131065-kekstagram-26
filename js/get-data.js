import { pictureContainerItems } from './picture.js';
import { getBigPicture } from './big-picture.js';


const showErrorMessage = (errorText) => {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('overlay', 'loader');
  errorMessage.style = `
    text-align: center;
    text-transform: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;`;
  errorMessage.innerText = `Ошибка загрузки данных. (${errorText})`;
  document.body.appendChild(errorMessage);

  const hideErrorMessage = () => {
    errorMessage.remove();
  };
  setTimeout(hideErrorMessage, 3000);
};


const getData = () => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((posts) => {
      pictureContainerItems(posts);
      getBigPicture(posts);
    }
    )
    .catch((error) => {
      showErrorMessage(error);
    });
};

export { getData };

