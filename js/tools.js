function getRandomNumber(min, max) {
  if (min >= max) {
    // eslint-disable-next-line no-alert
    alert(`Первое число диапазона должно быть меньше второго.\nВы ввели ${  min  } и ${  max}`);
  }
  else if (min < 0) {
    // eslint-disable-next-line no-alert
    alert(`Первое число диапазона не может быть меньше нуля.\nВы ввели ${  min  } и ${  max}`);
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
const idStore = [];
function getRandomId (min, max) {
  while(idStore.length < max){
    const randomId = Math.floor(Math.random()*max) + 1;
    if(idStore.indexOf(randomId) > -1) {continue;}
    return randomId;
  }
}
getRandomId (1, 25);

function checkStringLength(string, maxlenght) {
  if (string.length > maxlenght) {
    return false;
  } else {
    return true;
  }
}

checkStringLength('Строка, которая не проходит проверку', 35);

function getRandomItem(massiveName, maxStringNumber) {
  return massiveName[getRandomNumber(0, maxStringNumber)];
}

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
  errorMessage.innerText = errorText;
  document.body.appendChild(errorMessage);

  const hideErrorMessage = () => {
    errorMessage.remove();
  };
  setTimeout(hideErrorMessage, 3000);
};

export { getRandomNumber, getRandomItem, showErrorMessage };
