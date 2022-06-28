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


export { getRandomNumber, getRandomItem };
