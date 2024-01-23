const hamberger = document.querySelector(".hamberger_icon");
const nav_links = document.querySelector(".nav_links");
hamberger.addEventListener("click", () => {
  nav_links.classList.toggle("nav_links_place");
  hamberger.style.scale = "1.2";
  setTimeout(() => {
    hamberger.style.scale = "1";
  }, 2000);
});
