const modal = document.getElementById('modal');

const modalBtn = document.querySelectorAll('.open-modal');

const closeBtn = document.getElementsByClassName('modal-close-btn')[0];

modalBtn.forEach(function (e) {
  e.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.classList.remove('is-hidden');
}

function closeModal() {
  modal.classList.add('is-hidden');
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.classList.add('is-hidden');
  }
}
