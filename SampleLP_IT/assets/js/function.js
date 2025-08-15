const hum = document.querySelector(".humberger");
const header = document.querySelector("header");
const navmenu = document.querySelector(".nav_menu");

if (hum) {
  hum.addEventListener("click", function () {
    hum.classList.toggle("open");
    header.classList.toggle("open");
    navmenu.classList.toggle("open");
  });
}
