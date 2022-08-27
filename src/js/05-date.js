import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

// const date = new Date(999);
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getTime());

// const date1 = new Date().getTime();
// console.log('date1', date1);
// setTimeout(() => {
//   const date2 = new Date().getTime();
//   console.log('date2', date2);
//   console.log('deltaTime:', date2 - date1);
// }, 3000);

const date1 = Date.now();
console.log('date1', date1);
setTimeout(() => {
  const date2 = Date.now();
  console.log('date2', date2);
  console.log('deltaTime:', date2 - date1);
}, 3000);
