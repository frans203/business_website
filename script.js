// NAVBAR
const menu = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", function (e) {
  menu.classList.toggle("change");
  navBar.classList.toggle("change");
  navList.classList.toggle("change");
});
// END OF NAVBAR
// SECTION 2 VIDEO
const video = document.querySelector(".video");
const bar = document.querySelector(".video-bar");
const btn = document.querySelector(".buttons i");

const playPause = () => {
  if (video.paused) {
    video.play();
    video.style.opacity = 0.7;
    btn.className = "far fa-pause-circle";
  } else {
    video.pause();
    video.style.opacity = 0.3;
    btn.className = "far fa-play-circle";
  }
};

btn.addEventListener("click", function () {
  playPause();
});

video.addEventListener("timeupdate", function () {
  const barWidth = video.currentTime / video.duration;
  //   console.log(barWidth);
  bar.style.width = `${barWidth * 100}%`;
  if (video.ended) {
    video.style.opacity = 0.3;
    btn.className = "far fa-play-circle";
  }
});
// END OF SECTION 2 VIDEO

// SECTION 3 SWIPPER

var swiper = new Swiper(".swipper-container", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// END OF SECTION 3 SWIPPER
