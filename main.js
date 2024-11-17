
// バーガーボタン
const burgerBtn = document.querySelector('.burgerbtn');
const burgerBtnTop = document.querySelector('.bordertop');
const burgerBtnMiddle = document.querySelector('.bordermiddle');
const burgerBtnBottom = document.querySelector('.borderbottom');
const spMenu = document.querySelector('.spmenucontainer');

burgerBtn.addEventListener('click', () => {
  // メニュー開閉
  spMenu.classList.toggle('spmenuvisible');
  burgerBtnTop.classList.toggle('bordertop_open');
  burgerBtnMiddle.classList.toggle('bordermiddle_open');
  burgerBtnBottom.classList.toggle('borderbottom_open');
});

spMenu.addEventListener('click', () => {
  // メニュー開閉
  spMenu.classList.toggle('spmenuvisible');
  burgerBtnTop.classList.toggle('bordertop_open');
  burgerBtnMiddle.classList.toggle('bordermiddle_open');
  burgerBtnBottom.classList.toggle('borderbottom_open');
});