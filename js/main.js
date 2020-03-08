$(function () {
  //スムーズスクロール
  $('a[href^="#"]').click(function () {
    var set = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + set;
    $('body, html').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });

  //to-topボタン途中から登場
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#to-top').fadeIn()
    } else {
      $('#to-top').fadeOut()
    }
  });

  //to-topボタン押すと上に戻る
  $('#to-top').click(function () {
    $('body, html').animate({ 'scrollTop': 0 }, 500);
  });
})