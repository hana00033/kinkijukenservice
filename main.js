console.log("test1")

const body = document.body;  // body 要素
const modal = document.querySelector('.modal__wrapper');  // モーダル要素
const overlay = document.querySelector('.overlay');  // モーダルの背景の要素
const button = document.querySelector('.button');   // モーダルを表示させるボタン

// ボタンをクリックした時にモーダルを表示する
button.addEventListener('click', () => {
  body.style.top = `-${window.scrollY}px`;  // スクロール量を取得して body の高さとする
  body.classList.add('backgroundfix');  // body 要素を固定してスクロールできないようにする
  modal.classList.add('visible'); // モーダルを表示
}, false);

// モーダルの背景をクリックした時にモーダルを閉じる
overlay.addEventListener('click', () => {
  modal.classList.remove('visible');  // モーダルを非表示に
  body.classList.remove('backgroundfix');  // body の固定を解除
  const top = body.style.top;  // body の高さを取得
  const topHeight = top.replace('px', '').replace('-', '');  // top から - と px を除去
  window.scrollTo(0, topHeight); // topHeight の高さまで移動
}, false);




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