let hero = document.querySelector(".hero");
let btnModal = document.querySelector(".btn-modal");
let btnClose = document.querySelector(".btn-close");
let overlay = document.querySelector(".modal-overlay");
btnModal.addEventListener("click", function () {
  hero.classList.add("close");
  overlay.classList.add("open");
});
btnClose.addEventListener("click", function () {
  overlay.classList.add("close");
});
