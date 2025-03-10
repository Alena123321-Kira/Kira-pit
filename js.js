     const openModalBtn = document.getElementById('open-modal');
    const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', () => {
   modal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
   modal.classList.remove('active');
});