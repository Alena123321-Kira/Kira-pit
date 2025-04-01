// Пример: Плавная прокрутка к секциям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Пример: Анимация при скролле (можно использовать библиотеку типа Animate.css для более сложных эффектов)
window.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.classList.add('animate'); // Добавьте класс для анимации в CSS (например, fade-in)
    }
  });
});