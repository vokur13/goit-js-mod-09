import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

// const logger = time => {
//   console.log(`Log каждые ${time}ms - ${Date.now()}`);
// };

// console.log('До вызова setInterval');
// setInterval(logger, 2000, 2000);
// console.log('После вызова setInterval');

/*
 * Очистка интервала с clearInterval(intervalId)
 */

// const intervalID = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);
// if (shouldCancelInterval) {
//   clearInterval(intervalID);
// }

//
console.log('До вызова setTimeout()');
setTimeout(() => {
  console.log('Вызов отложенной фунции Callback B');
}, 1000);
setTimeout(() => {
  console.log('Вызов отложенной фунции Callback A');
}, 1000);
console.log('После вызова setTimeout()');
