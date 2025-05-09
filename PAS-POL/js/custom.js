$(function () {
  $(".slider-contents").slick({
    fade: true, // fedeオン
    speed: 1500, // 画像切り替えにかかる時間（ミリ秒）
    autoplaySpeed: 3000, // 自動スライド切り替え速度
    arrows: false, // 矢印表示・非表示
    autoplay: true, // 自動再生
    slidesToShow: 1, // スライド表示数
    slidesToScroll: 1, // スライドする数
    infinite: true, // 無限リピート オン・オフ
    responsive: [
      {
        breakpoint: 900,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  });
});
const header_nav = document.querySelector(".header-nav");
const nav = document.querySelector(".nav-menu");

header_nav.addEventListener("click", function () {
  header_nav.classList.toggle("open");
});

const to_top_btn = document.querySelector(".to-top");
to_top_btn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
