// loading
    let loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
      loader.style.display = "none";
    });
// end

// navbar
function Menu(e) {
  let list = document.querySelector("ul");

  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}
// end

// navbar hide
  let lastScrollTop = 0;
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-80px";
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });
// end

// text plugin
    gsap.registerPlugin(TextPlugin);
    gsap.to(".text", {
      duration: 4,
      repeat: 2,
      text: {
        value: "Hidroponik | Ngoding | Gowes",
        delay: 3,
      },
      ease: "none",
    });
// end

// aos
    // AOS.init();
// end

// scroll
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srLeft.reveal(".scLeft");

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srRight.reveal(".scRight")

const sr = ScrollReveal({
  origin: "bottom",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".scroll");
sr.reveal(".sc1", { delay: 100 });
sr.reveal(".sc2", { delay: 200 });
sr.reveal(".sc3", { delay: 300 });
sr.reveal(".sc4", { delay: 400 });

// modal cloud
const modalCloud = document.querySelector(".modalCloud");

const showModalCloud = document.querySelector(".show-modal-cloud");
const closeModalCloud = document.querySelector(".close-modal-cloud");

showModalCloud.addEventListener("click", function () {
  modalCloud.classList.remove("hidden");
});

closeModalCloud.addEventListener("click", function () {
  modalCloud.classList.add("hidden");
});
// end

// modal ai
const modalAi = document.querySelector(".modalAi");

const showModalAi = document.querySelector(".show-modal-ai");
const closeModalAi = document.querySelector(".close-modal-ai");

showModalAi.addEventListener("click", function () {
  modalAi.classList.remove("hidden");
});

closeModalAi.addEventListener("click", function () {
  modalAi.classList.add("hidden");
});
// end

// modal flutter
const modal = document.querySelector(".modal");

const showModal = document.querySelector(".show-modal");
const closeModal = document.querySelector(".close-modal");

showModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});
// end

// modal web
const modalw = document.querySelector(".modalw");

const showModalw = document.querySelector(".show-modalw");
const closeModalw = document.querySelector(".close-modalw");

showModalw.addEventListener("click", function () {
  modalw.classList.remove("hidden");
});

closeModalw.addEventListener("click", function () {
  modalw.classList.add("hidden");
});
// end

// modal hidro
const modala = document.querySelector(".modala");

const showModala = document.querySelector(".show-modala");
const closeModala = document.querySelector(".close-modala");

showModala.addEventListener("click", function () {
  modala.classList.remove("hidden");
});

closeModala.addEventListener("click", function () {
  modala.classList.add("hidden");
});
// end

// modal py
const modalb = document.querySelector(".modalb");

const showModalb = document.querySelector(".show-modalb");
const closeModalb = document.querySelector(".close-modalb");

showModalb.addEventListener("click", function () {
  modalb.classList.remove("hidden");
});

closeModalb.addEventListener("click", function () {
  modalb.classList.add("hidden");
});
// end