import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// const logMessage = () => {
//   console.log('Log при вызове callback-функции через 3 сек');
// };

// console.log('До вызова setTimeout()');
// setTimeout(
//   x => {
//     console.log(x);
//     console.log('1 - Внутри callback для setTimeout()');
//   },
//   2000,
//   5
// );
// setTimeout(
//   y => {
//     console.log(y);
//     console.log('2 - Внутри callback для setTimeout()');
//   },
//   1000,
//   50
// );
// console.log('После вызова setTimeout()');

// for (let index = 0; index < 10000; index++) {
//   console.log(index);
// }

//
const logger = time => {
  console.log(`Log через ${time}ms, потому что не отменили setTimeout()`);
};

const timerID = setTimeout(logger, 2000, 2000);
console.log(timerID);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerID);
}
