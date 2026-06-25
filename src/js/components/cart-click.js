document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".cards-team");

  function setCardState(card, isActive) {
    card.classList.toggle("cards-team--active", isActive);
    card.setAttribute("aria-expanded", String(isActive));
  }

  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      if (card.classList.contains("cards-team--active")) {
        setCardState(card, false);
      } else {
        closeAllProductCards();
        setCardState(card, true);
      }
    });
  });

  function closeAllProductCards() {
    productCards.forEach((card) => {
      setCardState(card, false);
    });
  }
});
