const modal = document.getElementById("modal");

const modalBtn = document.querySelectorAll(".open-modal");

const closeBtn = document.getElementsByClassName("modal-close-btn")[0];

// Listen 	for OPEN Click
modalBtn.forEach(function (e) {
  e.addEventListener("click", openModal);
});
// Listen for CLOSE Click
closeBtn.addEventListener("click", closeModal);
// Listen for OUTSIDE Click
window.addEventListener("click", outsideClick);

// Function to OPEN modal
function openModal() {
  modal.classList.remove("is-hidden");
}

// Function to CLOSE modal
function closeModal() {
  modal.classList.add("is-hidden");
}
// Function to CLOSE modal
function outsideClick(e) {
  if (e.target == modal) {
    modal.classList.add("is-hidden");
  }
}
