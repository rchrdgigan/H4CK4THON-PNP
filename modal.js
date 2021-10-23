// Get Modal Elements
var modal = document.getElementById('simpleModal'); 
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('closeBtn')[0];

// listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// function to Open
function openModal() {
  modal.style.display = 'block';
}

// function to Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
