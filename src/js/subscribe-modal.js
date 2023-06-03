(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-new-chocolate-modal-open]"),
      closeModalBtn: document.querySelector("[data-new-chocolate-modal-close]"),
      modal: document.querySelector("[data-new-chocolate-modal]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();