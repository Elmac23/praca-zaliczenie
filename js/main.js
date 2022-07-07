const menuEl = document.querySelector(".menu");
const upBtnEl = document.querySelector(".up-btn");
const dateEl = document.querySelector("span.date");
const newsLetterInputEl = document.querySelector(".patch-note__form input");
const newsLetterFormEl = document.querySelector(".patch-note__form");
const year = new Date().getFullYear();
dateEl.textContent = year;
window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight) {
    menuEl.classList.add("menu--background");
    upBtnEl.classList.remove("up-btn--hidden");
  } else {
    upBtnEl.classList.add("up-btn--hidden");
    menuEl.classList.remove("menu--background");
  }
});

newsLetterFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = newsLetterInputEl.value;
  alert(`Thanks for joining ${email}!`);
  newsLetterInputEl.value = "";
});
