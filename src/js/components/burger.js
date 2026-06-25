const burger = document.getElementById("burger");
const cover = document.getElementById("cover");
const nav = document.getElementById("nav");
const theLinks = document.querySelectorAll(".nav__link");

if (burger && cover && nav) {
  const closeMenu = () => {
    nav.classList.remove("nav--active");
    cover.classList.remove("cover--active");
    document.body.classList.remove("stop-scroll");
    burger.setAttribute("aria-expanded", "false");
  };

  burger.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("nav--active");

    cover.classList.toggle("cover--active", isOpen);
    document.body.classList.toggle("stop-scroll", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  cover.addEventListener("click", closeMenu);
  theLinks.forEach((link) => link.addEventListener("click", closeMenu));
}

