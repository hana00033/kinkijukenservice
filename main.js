document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const scrollIndicator = document.querySelector('.scroll-indicator');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          scrollIndicator.style.opacity = '0';
      } else {
          scrollIndicator.style.opacity = '1';
      }
  });
});

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

//モーダル
// 変数に要素を入れる
var trigger = $('.modal__trigger'),
    wrapper = $('.modal__wrapper'),
    layer = $('.modal__layer'),
    container = $('.modal__container'),
    close = $('.modal__close'),
    content = $('.modal__content');

// 『モーダルを開くボタン』をクリックしたら、『モーダル本体』を表示
$(trigger).click(function() {
  $(wrapper).fadeIn(400);

  // クリックした画像のHTML要素を取得して、置き換える
  $(content).html($(this).prop('outerHTML'));

  // スクロール位置を戻す
  $(container).scrollTop(0);

  // サイトのスクロールを禁止にする
  $('html, body').css('overflow', 'hidden');
});

// 『背景』と『モーダルを閉じるボタン』をクリックしたら、『モーダル本体』を非表示
$(layer).add(close).click(function() {
  $(wrapper).fadeOut(400);

  // サイトのスクロール禁止を解除する
  $('html, body').removeAttr('style');
});

// アニメーション
$(window).scroll(function (){
	$('.fadein').each(function(){
		var elemPos = $(this).offset().top,
		scroll = $(window).scrollTop(),
		windowHeight = $(window).height();

			if (scroll > elemPos - windowHeight + 150){
				$(this).addClass('scrollin');
			}
	});
});