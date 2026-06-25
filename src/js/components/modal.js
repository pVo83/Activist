const modalTriggers = document.querySelectorAll("[data-modal-open]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
let activeModal = null;

// открытие модального окна
function openModal(modal) {
  if (!modal) {
    return;
  }

  activeModal = modal;
  activeModal.classList.add("modal--active");
  activeModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("stop-scroll");
}

// закрытие модального окна
function closeModal() {
  if (!activeModal) {
    return;
  }

  activeModal.classList.remove("modal--active");
  activeModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("stop-scroll");

  activeModal = null;
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modalId = trigger.dataset.modalOpen;
    const modal = document.getElementById(modalId);

    openModal(modal);
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
