(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-review-open]'),
    closeModalBtn: document.querySelector('[data-modal-review-close]'),
    modal: document.querySelector('[data-modal-review]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  const numericInput = document.getElementById('personal-tell-input');

  // Добавляем обработчик события "input" для поля ввода
  numericInput.addEventListener('input', function () {
    // Удаляем все нецифровые символы, оставляя только цифры
    this.value = this.value.replace(/\D/g, '');
  });
})();
