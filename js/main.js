// Использовал информацию из этой статьи: https://stackabuse.com/javascript-generate-random-number-in-range/
function getRandomNumber(min, max) {
  if (min >= max) {
    // eslint-disable-next-line no-alert
    alert(`Первое число диапазона должно быть меньше второго.\nВы ввели ${  min  } и ${  max}`);
  }
  else if (min < 0) {
    // eslint-disable-next-line no-alert
    alert(`Первое число диапазона не может быть меньше нуля.\nВы ввели ${  min  } и ${  max}`);
  } else {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

getRandomNumber(5, 1);


function checkStringLength(string, maxlenght) {

  if (string.length > maxlenght) {
    return false;
  } else {
    return true;
  }
}

checkStringLength('Строка, которая не проходит проверку', 35);
