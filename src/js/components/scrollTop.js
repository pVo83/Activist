const scrollToTopBtn = document.querySelector(".scroll-to-top");
const rootElement = document.documentElement;

if (scrollToTopBtn) {
  function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if (rootElement.scrollTop / scrollTotal > 0.2) {
      scrollToTopBtn.classList.add("scroll-to-top--visible");
    } else {
      scrollToTopBtn.classList.remove("scroll-to-top--visible");
    }
  }

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  scrollToTopBtn.addEventListener("click", scrollToTop);
  document.addEventListener("scroll", handleScroll);
}

import SmoothScroll from "smooth-scroll";
new SmoothScroll('a[href*="#"]');
