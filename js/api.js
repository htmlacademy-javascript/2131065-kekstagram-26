import { pictureContainerItems } from './picture.js';
import { getBigPicture } from './big-picture.js';
import { showErrorMessage } from './tools.js';

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
      showErrorMessage(`Ошибка загрузки данных с сервера (${error})`);
    });
};

const sendData = (formData) => {
  fetch(
    'https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData,
    })

    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .catch((error) => {
      showErrorMessage(`Не удалось отослать данные (${error})`);
    });
};

export { getData, sendData };

