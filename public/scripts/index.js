const searchButton = document.querySelector('#page-home main a');
const modal = document.querySelector('#modal');
const modalCloseButton = document.getElementById('fechar');

searchButton.addEventListener('click', () => modal.classList.remove('hide'));
modalCloseButton.addEventListener('click', () => modal.classList.add('hide'));
