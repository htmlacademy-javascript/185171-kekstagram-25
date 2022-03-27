function getNumber (min, max) {
  if (min < 0 || min >= max || max <= 0) {
    return ('Не верный диапазон! Укажите другие значения.');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getNumber(0, 140);

function stringLength (string, maxLength) {
  return string.length <= maxLength;
}

stringLength('Hello', 20);
