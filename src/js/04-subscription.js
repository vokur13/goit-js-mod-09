import '../css/common.css';
import BSN from 'bootstrap.native';

const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const modal = new BSN.Modal('#subscription-modal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onCloseModal);

function onCloseModal() {
  hasSubscribed = true;
  modal.hide();
}
function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Exceeds MAX_PROMPT_ATTEMPTS || hasSubscribed');
    return;
  }
  setTimeout(() => {
    console.log('Open Subscription alert');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

// const intervalID = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Нужно остановить интервал');
//     clearInterval(intervalID);
//     return;
//   }
//   console.log('Подпишись на рассылку! - ' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);
