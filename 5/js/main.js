const getNumber = (min, max) => {
  if (min < 0 || min >= max || max <= 0) {
    return ('Не верный диапазон! Укажите другие значения.');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

getNumber(0, 140);

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('Hello', 20);

const PHOTO_COUNT = 25;
const COMMENTS_COUNT = 2;
let commentsIdArray;
let commentId;
const messageArray = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const authors = ['Аноним Иваныч', 'Василий', 'Николай', 'Ольга Николаевна', 'ФотоПрофи', 'Петр Петров'];

const getCommentsId = function() {
  while (commentsIdArray.length < COMMENTS_COUNT) {
    commentId = getNumber(1, 1000);
    const isRepeatedNumber = commentsIdArray.some((value) => value === commentId);
    if (!isRepeatedNumber) {
      commentsIdArray.push(commentId);
    }
  }
  return commentsIdArray;
};

const createCommentObject = () => {
  const comments = [];
  let comment;
  commentsIdArray = [];
  getCommentsId();
  for (let j = 0; j < commentsIdArray.length; j++) {
    comment = {
      'id': commentsIdArray[j],
      'avatar': `img/avatar-${getNumber(1, 6)}.svg`,
      'message': messageArray[getNumber(0, 5)],
      'name': authors[getNumber(0, 5)]
    };
    comments.push(comment);
  }
  return comments;
};

const createPhotoObject = () => {
  const photos = [];
  let photo;
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    const id = i;
    const url = `photos/${i}.jpg`;
    photo = {
      'id': id,
      'url': url,
      'description': 'Новое фото, еще лучше предыдущего!',
      'likes': getNumber(15, 200),
      'comments': createCommentObject()
    };
    photos.push(photo);
  }
  return photos;
};

createPhotoObject();
