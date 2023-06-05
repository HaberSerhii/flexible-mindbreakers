// Modal Buy-now
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
    
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-second]"),
    closeModalBtn: document.querySelector("[data-modal-close-second]"),
    modal: document.querySelector("[data-modal-second]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
    
})();



// Buy now select
const item1 = document.getElementById('item-first');
const item = document.getElementById('item-second');
const itemm = document.getElementById('item-third');
const item3 = document.getElementById('item-forth');
const item4 = document.getElementById('item-fifth');
const item5 = document.getElementById('item-sixth');


item1.addEventListener('click', function() {

  this.classList.toggle('selected-buy-now');
});
item.addEventListener('click', function() {

  this.classList.toggle('selected-buy-now');
});
itemm.addEventListener('click', function() {

  this.classList.toggle('selected-buy-now');
});
item3.addEventListener('click', function() {

  this.classList.toggle('selected-buy-now');
});
item4.addEventListener('click', function() {

  this.classList.toggle('selected-buy-now');
});
item5.addEventListener('click', function() {

  this.classList.toggle('selected-buy-now');
});

const numericInput = document.getElementById('personal-tell-second');

// Добавляем обработчик события "input" для поля ввода
numericInput.addEventListener('input', function() {
  // Удаляем все нецифровые символы, оставляя только цифры
  this.value = this.value.replace(/\D/g, '');
});

const numericInputе = document.getElementById('personal-card-second');

// Добавляем обработчик события "input" для поля ввода
numericInputе.addEventListener('input', function() {
  // Удаляем все нецифровые символы, оставляя только цифры
  this.value = this.value.replace(/\D/g, '');
});

const numericInpu = document.getElementById('personal-tell');

// Добавляем обработчик события "input" для поля ввода
numericInpu.addEventListener('input', function() {
  // Удаляем все нецифровые символы, оставляя только цифры
  this.value = this.value.replace(/\D/g, '');
});

const numericInp = document.getElementById('personal-card');

// Добавляем обработчик события "input" для поля ввода
numericInp.addEventListener('input', function() {
  // Удаляем все нецифровые символы, оставляя только цифры
  this.value = this.value.replace(/\D/g, '');
});